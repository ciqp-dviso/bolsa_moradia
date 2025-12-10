const ID_PASTA_DESTINO = "1DOGLy426lzbc7h1Vse_NSh-uvSQ6Tcdo";
const PASTA_DESTINO = DriveApp.getFolderById(ID_PASTA_DESTINO);

function adicionarArquivo(obj, nome, cpf) {
 try {
    // Converte o Base64 em arquivo
    var blob = Utilities.newBlob(
      Utilities.base64Decode(obj.data),
      obj.mimeType,
      obj.fileName
    );

    // Define o nome da subpasta
    var nomePasta = `${nome}_${cpf}`;

    // Verifica se a pasta já existe dentro da pasta principal
    var pastas = PASTA_DESTINO.getFoldersByName(nomePasta);
    var pastaBenef = pastas.hasNext() ? pastas.next() : PASTA_DESTINO.createFolder(nomePasta);

    // Salva o arquivo dentro da pasta da pessoa
    var file = pastaBenef.createFile(blob);

    return { status: "success", message: "Arquivo salvo em: " + pastaBenef.getName() };
  } catch (e) {
    return { status: "error", message: e.message };
  }
}