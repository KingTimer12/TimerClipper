import { useCallback, useState } from 'react';
import { DropzoneState, useDropzone } from 'react-dropzone';
import { CloseIcon } from '../../icons/CloseIcon';
import { FileIcon } from '../../icons/FileIcon';
import { UploadIcon } from '../../icons/UploadIcon';
import { Flex, Text } from '@radix-ui/themes';
import axios from 'axios';

interface InputProps {
    dropzone: DropzoneState;
}

interface HasFileProps {
    file?: File;
    removeFile: () => void;
}

export default function FileInput() {
    const [file, setFile] = useState<File | null>(null);

    const removeFile = useCallback(() => {
        setFile(null);
    }, [file]);

    const onDrop = useCallback((files: File[]) => {
        setFile(files[0]);
        axios({
            method: "PUT",
            url: "",
            headers: {
                "Content-Type": "video/mp4"
            },
            data: files[0]
        })
    }, []);

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'video/*': ['.mp4'],
        },
        maxFiles: 1,
        preventDropOnDocument: true,
    });

    if (file) return <HasFile file={file} removeFile={removeFile} />;

    return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;
    const color = isDragActive ? 'border-blue-500' : 'border-gray-600'

    return (
        <div className={`w-[20rem] h-[10rem] rounded-lg border-dashed border-2 transition-all hover:border-gray-500 ${color}`} {...getRootProps()}>
            <label htmlFor='dropzone-file' className='cursor-pointer w-full h-full'>
                <Flex align="center" direction="column" className='pt-5 pb-6' gap="3">
                    <UploadIcon
                        className={`w-10 h-10 mb-3 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}
                    />
                    {
                        isDragActive ? (
                            <Text className='font-bold text-lg text-blue-400'>Solte o arquivo</Text>
                        ) : (
                            <Text align="center" size="9" className='font-bold text-lg text-gray-400'>Clique para selecionar o vídeo ou arraste aqui.</Text>
                        )
                    }
                </Flex>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    )
}

const HasFile = ({ file, removeFile }: HasFileProps) => {
    
    return (
        <div className="w-[20rem] h-[10rem] rounded-lg border-dashed border-2 border-gray-600 bg-gray-700 flex justify-center items-center">
            <div className="bg-white w-36 rounded-md shadow-md flex gap-3 items-center justify-center">
                <FileIcon className="w-5 h-5 my-4 ml-4" />
                <span className="text-sm text-gray-500 my-4">{file?.name}</span>
                <button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
                    <CloseIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};