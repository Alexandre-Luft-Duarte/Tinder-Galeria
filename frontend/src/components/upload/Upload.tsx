import React from "react";

import { UploadProps } from "../../_config/interfaces/Interface";
import Button from "../button/Button";

export default function Upload({ selectedFiles, setSelectedFiles }: UploadProps) {

    const handleUploadAndGenerateScript = () => {
        if (selectedFiles.length === 0) {
            alert('Por favor, anexe ao menos um arquivos antes de enviar');
            return;
        }

        const scriptContent = '#!/bin/bash\n' + 
                          'echo "Iniciando limpeza de arquivos..."\n' +
                          selectedFiles.map(file => `rm "${file.name}"`).join("\n") +
                          '\necho "Limpeza concluída!"';

        const blob = new Blob([scriptContent], { type: 'text/x-shellscript' })
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'limpar_fotos.sh'; 
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert("Script de limpeza 'limpar_fotos.sh' baixado! Siga as instruções na tela.");
    }
    
    return (
        <div>
            <div>
                <Button onClick={handleUploadAndGenerateScript}>
                    Fazer Upload
                </Button>
    
            </div>
        </div>
    )
};

