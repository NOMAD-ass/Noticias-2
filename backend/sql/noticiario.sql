CREATE DATABASE IF EXISTS noticias;


CREATE DATABASE IF NOT EXISTS noticiario;           
    
USE noticiario; 

CREATE TABLE noticiario.noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    imagem BLOB,
    link  VARCHAR(255),
);    


INSERT INTO noticias {
    titulo,
    conteudo,
    imagem,
    link

} VALUES {
    'Play TV',
    'Neste sentido, a utilização racional de ativos intangíveis acarreta um processo de reformulação e modernização da gestão inovadora da qual fazemos parte. O incentivo ao avanço tecnológico, assim como a revolução dos costumes cumpre um papel essencial na formulação das novas proposições. À luz dos acontecimentos recentes, a valorização da diversidade de pensamento estende o alcance e a importância do fluxo de informações. Acima de tudo, é fundamental ressaltar que o consenso sobre a necessidade de qualificação ilustra as tensões entre tradição e inovação dos conhecimentos estratégicos para atingir a excelência.',
    '../img/Sexta-feira.jpg',
  'https://www.exemplo.com/noticia1'
}


SELECT(
    titulo,
    conteudo,
    imagem,
    link
)FROM noticias 5px;

