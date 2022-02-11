import { useCallback } from "react";
import { Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "store/store";

import { addFile, deleteFile } from "store/stepTreeReducer";
import { getRandomId } from "utils/utils";

const FileInput = ({ name, control }: { name: string; control: any }) => {
    const dispatch = useDispatch();
    const store = useSelector((state: RootState) => state.stepThreeReducer);

    const onDrop = useCallback(
        (acceptedFiles) => {
            const res = acceptedFiles.reduce((t: any, e: any) => {
                return [...t, { id: getRandomId(), name: e.name }];
            }, []);
            dispatch(addFile(res));
        },
        [dispatch]
    );

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ onDrop });

    const deleteFileFromStore = (id: string) => {
        dispatch(deleteFile({ id }));
    };

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={() => (
                <>
                    <div
                        {...getRootProps({
                            className: `dropzone ${isDragAccept && "dropzoneAccept"} ${
                                isDragReject && "dropzoneReject"
                            }`,
                        })}
                    >
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p className="dropzone__text">Можно отпускать!</p>
                        ) : (
                            <p className="dropzone__text">Перетащите файлы сюда или клик для выбора</p>
                        )}
                    </div>
                    <div>
                        {store.map((e) => {
                            return (
                                <div key={e.id} className="dropzone__put">
                                    <p>{e.name}</p>
                                    <button type="button" onClick={() => deleteFileFromStore(e.id)}>
                                        &#10008;
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        />
    );
};

export default FileInput;
