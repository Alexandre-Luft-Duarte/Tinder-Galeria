import React, { useEffect, useRef, useState } from "react";

import styles from "./PhotoStage.module.css";
import Icons from "../icon/Icons";
import Button from "../button/Button";

export default function PhotoStage() {

    const fileInputRef = useRef<HTMLInputElement>(null); // Cria um ponteiro (ref) apontando para nada (null)
    // const [selectedFiles, setSelectedFiles] = useState<File[]>([]); O tipo 'File[]' diz ao TypeScript que este estado será um array de objetos do tipo 'File'. Ele começa com um array vazio
    const [previewUrls, setPreviewUrls] = useState<string[]>([]); // Cria um estado para guardar as urls
    const [currentUrlIndex, setCurrentUrlIndex] = useState(0); // Estado para gerenciar a posição das urls no array


    // Cada chamada a URL.createObjectURL aloca um espaço na memória do navegador para "segurar" aquela referência. Se você apenas criar essas URLs e nunca as limpar, sua aplicação pode consumir muita memória e ficar lenta, especialmente se o usuário selecionar muitos arquivos ou fizer isso várias vezes.
    useEffect(() => { // Será executado quando componente for desmontado
        return () => {
            previewUrls.forEach(url => URL.revokeObjectURL(url)); // Lê o array de previewUrls e limpa o endereço de memória de cada URL.
        }
    }, [previewUrls]); // Executa toda vez que o estado de previewUrl muda, ou seja, quando uma url é guardada

    const handleAccessionClick = () => {
        fileInputRef.current?.click(); // Esta linha diz: "Clique no elemento HTML que a minha ref está apontando". Assim, abre os arquivos para serem selecionados
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files) { // Contém a lista de arquivos que o usário selecionou, ele não é realmente um array, ele é uma FileList
            const filesArray = Array.from(event.target.files); // Precisamos transformar essa FileList que é gerada para um array
            // setSelectedFiles(filesArray);  Atualizamos o estado com o array com os arquivos selecionados

            // Este método percorre cada item (file) do array filesArray. Para cada file, ele executa a função que está dentro do map.
            const urls = filesArray.map(file => URL.createObjectURL(file)); // O file  é um objeto File do js. Ele contém o nome do arquivo, tipo do arquivo e dados binários da imagem guardados na memória do navegador. A função createObjectURL é nativa do navegador e recebe o objeto File e cria um endereço URL único e temporário que aponta diretamente para esses dados binários na memória.
            setPreviewUrls(urls);  // Atualiza o estado de PreviewsUrl com o novo array de URLs. Está chamada dispara o useEffect
            setCurrentUrlIndex(0);
        }
    }

    const handleArrowLeftClick = () => {
        if (currentUrlIndex === 0) {
            return;
        }
        // setCurrentUrlIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
        setCurrentUrlIndex(prevIndex => prevIndex -1);
    }

    const handleArrowRightClick = () => {
        if (currentUrlIndex >= previewUrls.length - 1) {
            return;
        }
        // setCurrentUrlIndex(prevIndex => (previewUrls.length - 1 ? prevIndex + 1 : prevIndex));
        setCurrentUrlIndex(prevIndex => prevIndex + 1);
    }

    return(
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                {previewUrls.length > 0 ? ( // Se tiver algo dentro do preview cai nessa condição
                        <img 
                            key={currentUrlIndex} 
                            src={previewUrls[currentUrlIndex]} // Recebe a url blob e mostra a imagem
                            alt={`Preview ${currentUrlIndex + 1}`}
                            className={styles.previewImage}
                        />
                ) : (
                    <p>Selecione os arquivos</p>
                )} 
            </div>
            <input 
                type="file" 
                ref={fileInputRef} // Agrega a ref do ponteiro nesse input
                className={styles.hiddenInput} // Css para esconder o type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange} // Conecta a função ao evento de onChange do input
            />
            <div className={styles.actionsContainer}>
                <Icons icon="arrowLeft" onClick={handleArrowLeftClick} className={currentUrlIndex === 0 ? styles.disabledIcon : ''}/>
                <Button onClick={handleAccessionClick}> {/* Chama a função para selecionar os arquivos usando o onClick nesse botão */}
                    Anexar Arquivos
                </Button>
                <Icons icon="arrowRight" onClick={handleArrowRightClick} className={previewUrls.length - 1 ? styles.disabledIcon : ''}/>
            </div>
        </div>

    );
}