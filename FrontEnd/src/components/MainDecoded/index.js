import React, { useState } from "react";
import api from "../../services/api";
import { GrDocumentUpload } from "react-icons/gr";
import { Container, AlertDiv } from "./style";
import { Alert, AlertTitle } from '@material-ui/lab';

export default function MainDecoded() {
    const [encoded, setEncoded] = useState("");
    const [encodedFile, setEncodedFile] = useState([]);
    const [decoded, setDecoded] = useState("");
    const [decodedFile, setDecodedFile] = useState([]);
    const [formDecode, setFormDecode] = useState(0);
    const [formDecodeUpload, setFormDecodeUpload] = useState(0);
    const [number, setNumber] = useState([0, ""]);

    async function decodeText(event) {
        event.preventDefault();
        try {
            const decode = await api.post("/decode/text", { encoded });
            setFormDecode(1);
            setDecoded(decode.data);
            setNumber([1, "String desofuscada com sucesso!"]);
        } catch (error) {
            setNumber([2, error.response.data.message]);
        }
    }
    async function decodeUpload(event) {
        let formData = new FormData();
        formData.append("attachment", encodedFile);
        event.preventDefault();
        try {
            const decode = await api.post("/decode/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setDecodedFile(decode.data);
            setFormDecodeUpload(1);
            setNumber([1, "Arquivo desofuscado com sucesso!"]);
        } catch (error) {
            setNumber([2, error.response.data.message]);
        }
    }

    return (
        <Container>
            <h1>
                <span>Desofusque</span> sua String aqui!
      </h1>

            <div className="desofuscador">
                <div className="upload-file">
                    <form onSubmit={decodeUpload} encType="multipart/form-data">
                        <p>A partir de arquivo texto:</p>
                        <input
                            type="file"
                            id="attachment"
                            name="attachment"
                            // required={true}
                            multiple
                            onChange={(event) => setEncodedFile(event.target.files[0])}
                        />
                        <button type="submit" className="icon">
                            <GrDocumentUpload className="upload" />
                        </button>
                    </form>
                </div>

                <div className="upload-string">
                    <form onSubmit={decodeText}>
                        <p>
                            A partir de Strings:
                    </p>
                        <input
                            type="text"
                            placeholder="Informe o texto"
                            value={encoded}
                            onChange={(event) => setEncoded(event.target.value)}
                        />
                        <button type="submit">Desofuscar</button>
                    </form>
                </div>
            </div>

            <div className="resultado-string">
                {formDecode === 0 ? (
                    ""
                ) : (
                        <div className="form">
                            <h2>Resultado do texto encriptografado: </h2>

                            <form>
                                <h4>{decoded}</h4>
                            </form>
                        </div>
                    )}
            </div>

            <div className="resultado-string">
                {formDecodeUpload === 0 ? (
                    ""
                ) : (
                        <div className="form">
                            <h2>Resultado do arquivo encriptografado: </h2>

                            <form>
                                <h4>
                                    {decodedFile}
                                </h4>
                            </form>
                        </div>
                    )}
            </div>

            {number[0] >= 1
                ? setTimeout(() => {
                    setNumber([0, ""]);
                }, 5000)
                : ""}
            {number[0] === 2 ? (
                <AlertDiv>
                    <Alert severity="error">
                        <AlertTitle>Erro!</AlertTitle>
                        <strong>{number[1]}</strong>
                    </Alert>
                </AlertDiv>
            ) : number[0] === 1 ? (
                <AlertDiv>
                    <Alert severity="success">
                        <AlertTitle>Sucesso!</AlertTitle>
                        <strong>{number[1]}</strong>
                    </Alert>
                </AlertDiv>
            ) : (
                        ""
            )}
        </Container >
    );
}
