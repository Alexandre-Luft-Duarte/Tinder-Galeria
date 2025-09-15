import React, { useEffect, useRef, useState } from "react";

import styles from "./PhotoStage.module.css";
import Icons from "../icon/Icons";
import Button from "../button/Button";
import Upload from "../upload/Upload";
import { Stage } from "../../_config/interfaces/Interface";

export default function PhotoStage() {

    const fileInputRef = useRef<HTMLInputElement>(null); // Cria um ponteiro (ref) apontando para nada (null)
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]); /*O tipo 'File[]' diz ao TypeScript que este estado será um array de objetos do tipo 'File'. Ele começa com um array vazio*/
    const [previewUrls, setPreviewUrls] = useState<string[]>([]); // Cria um estado para guardar as urls
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0); // Estado para gerenciar a posição das urls no array
    // Cada chamada a URL.createObjectURL aloca um espaço na memória do navegador para "segurar" aquela referência. Se você apenas criar essas URLs e nunca as limpar, sua aplicação pode consumir muita memória e ficar lenta, especialmente se o usuário selecionar muitos arquivos ou fizer isso várias vezes.
    const [stage, setStage] = useState<Stage>('selecting');


    useEffect(() => { // Será executado quando componente for desmontado
        return () => {
            previewUrls.forEach(url => URL.revokeObjectURL(url)); // Lê o array de previewUrls e limpa o endereço de memória de cada URL.
        }
    }, []);

    const resetStage = () => {
        previewUrls.forEach(url => URL.revokeObjectURL(url));
        setPreviewUrls([]);
        setSelectedFiles([]);
        setCurrentUrlIndex(0);
        setStage('selecting');
    }

    const handleAccessionClick = () => {
        resetStage();
        fileInputRef.current?.click(); // Esta linha diz: "Clique no elemento HTML que a minha ref está apontando". Assim, abre os arquivos para serem selecionados
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files) { // Contém a lista de arquivos que o usário selecionou, ele não é realmente um array, ele é uma FileList
            const filesArray = Array.from(event.target.files); // Precisamos transformar essa FileList que é gerada para um array
            setSelectedFiles(filesArray);  //Atualizamos o estado com o array com os arquivos selecionados

            // Este método percorre cada item (file) do array filesArray. Para cada file, ele executa a função que está dentro do map.
            const urls = filesArray.map(file => URL.createObjectURL(file)); // O file  é um objeto File do js. Ele contém o nome do arquivo, tipo do arquivo e dados binários da imagem guardados na memória do navegador. A função createObjectURL é nativa do navegador e recebe o objeto File e cria um endereço URL único e temporário que aponta diretamente para esses dados binários na memória.
            setPreviewUrls(urls);  // Atualiza o estado de PreviewsUrl com o novo array de URLs. Está chamada dispara o useEffect
            setCurrentUrlIndex(0);
            setStage('previewing');
        }
    }

    const handleStayImage = () => {
        if (currentUrlIndex >= previewUrls.length - 1) {
            setStage('confirming');
            return;
        }

        setCurrentUrlIndex(prevIndex => prevIndex + 1);
    }

    const handleConfirmUpload = () => {
        console.log('Upload confirmado', selectedFiles);
        resetStage();
    }

    function handleDeleteImage() {
        if (previewUrls.length === 0) {
            setStage('confirming');
            return;
        }

        const newPreviewUrls = previewUrls.filter((_, index) => index !== currentUrlIndex);
        const newSelectedFiles = selectedFiles.filter((_, index) => index !== currentUrlIndex);

        if (newPreviewUrls.length === 0) {
            setStage('confirming');
            setPreviewUrls(newPreviewUrls);
            setSelectedFiles(newSelectedFiles);
            return;
        }

        setPreviewUrls(newPreviewUrls);
        setSelectedFiles(newSelectedFiles);

        if(currentUrlIndex >= newPreviewUrls.length && newPreviewUrls.length > 0) {
            setCurrentUrlIndex(newPreviewUrls.length - 1);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                {stage === 'selecting' && <p>Selecione os arquivos</p>}
                {stage === 'previewing' && previewUrls.length > 0 &&(
                    <img 
                        key={currentUrlIndex} 
                        src={previewUrls[currentUrlIndex]} // Recebe a url blob e mostra a imagem
                        alt={`Preview ${currentUrlIndex + 1}`}
                        className={styles.previewImage}
                    />
                )}

                {stage === 'confirming' && (
                    <div className={styles.confirmation}>
                        <h3>Deseja fazer o upload dos {selectedFiles.length} arquivos selecionados?</h3>
                        <div className={styles.confirmationActions}>
                            <Upload selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
                            <Button onClick={resetStage}>Não, começar de novo</Button>
                        </div>
                    </div>
                )}
            </div>
            <input 
                type="file" 
                ref={fileInputRef}
                className={styles.hiddenInput}
                multiple
                accept="image/*"
                onChange={handleFileChange}
            />
            <div className={styles.actionsContainer}>
                <Icons icon="delete" onClick={handleStayImage} className={currentUrlIndex === 0 ? styles.disabledIcon : ''}/>

                <Button onClick={handleAccessionClick}>
                    Anexar Arquivos
                </Button>

                <Icons icon="check" onClick={handleDeleteImage} className={styles.containerDelete}/>

            </div>
        </div>

    );
}