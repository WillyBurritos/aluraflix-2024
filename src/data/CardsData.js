
const cardsData = [
    {
        "id": 1,
        "title": "Qué Significa Pensar Como Programador",
        "category": "FRONT END",
        "photo": "https://i.ytimg.com/vi/ov7vA5HFe6w/sddefault.jpg",
        "link": "https://www.youtube.com/embed/ov7vA5HFe6w?si=rFYWWhqKMEWzxiJn",
        "description": "¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera? En este video Christian Velasco nos habla de las principales características de un Programador."
    },
    {
        "id": 2,
        "title": "Cuándo usar let, var y const?",
        "category": "FRONT END",
        "photo": "https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/PztCEdIJITY?si=hfEWd-LVzlUvP_qT",
        "description": "¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript."
    },

    
    {
        "id": 3,
        "title": "¿Qué es JavaScript?",
        "category": "FRONT END",
        "photo": "https://i.ytimg.com/vi/GJfOSoaXk4s/mqdefault.jpg",
        "link": "https://www.youtube.com/embed/GJfOSoaXk4s?si=Sy4rvrikw1n4x2-o",
        "description": "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips."
    },
    {
        "id": 4,
        "title": "Equipo Front End",
        "category": "FRONT END",
        "photo": "https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/rpvrLaBQwgg?si=V1VLVFRuKgOI_y6-",
        "description":  "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?"
    },
    {
        "id": 5,
        "title": "Cómo volverse un desarrollador Front End #AluraTips",
        "category": "FRONT END",
        "photo": "https://img.youtube.com/vi/-Ou5c3A225k/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/-Ou5c3A225k?si=sZVBEHYh3qogSiSH",
        "description":  "Terminé mis estudios, ¿y ahora? ¿Cómo puedo entrar al mercado laboral? ¿Cómo encontrar un trabajo front end? En este video nuestra instructor Barbara nos da algunos consejos para las personas que desean entrar en el área del desarrollo web."
    }, 
    {
        "id": 6,
        "title": "Spring Framework. ¿Qué es?",
        "category": "BACK END",
        "photo": "https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/t-iqt1b2qqk?si=HaMciLKuslok023B",
        "description":"¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? Spring es el framework más usado de Java. Nos ofrece herramientas que nos permiten crear proyectos más avanzados, con mejores prácticas y en menor tiempo. También posee una gran comunidad, lo que nos brinda muchísima documentación y ayuda."
    },
    {
        "id": 7,
        "title": "¿Qué es SQL y NoSQL?",
        "category": "BACK END",
        "photo":  "https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/cLLKVd5CNLc?si=MYp6WnXXQvqGSPYi",
        "description": "¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y cuáles son las principales ventajas de cada una? Álvaro Camacho lo explica en este vídeo."
    },
    {
        "id": 8,
        "title": "Simplificando tu código en Java: Conoce los enum",
        "category": "BACK END",
        "photo": "https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/EoPvlE85XAQ?si=jfXKclbzaZEcDm83",
        "description": "¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código? En este Alura+ la instructora Génesys Rondón nos enseña a simplificar esta tarea usando un tipo de dato especial llamado enum."
    },
    {
        "id": 9,
        "title": "Simplificando el Back End #AluraTips",
        "category": "BACK END",
        "photo": "https://img.youtube.com/vi/XuSXJ9DUcvY/hqdefault.jpg",
        "link": "https://www.youtube.com/embed/XuSXJ9DUcvY?si=z_LfI34tWSwsqNve", 
         "description": "¿Quieres conocer y entender mejor qué es el Back End? En este video Bismarck Berrios nos explica qué es el back end de una manera sencilla."
    },
    {
        "id": 10,
        "title": "Camino hacia el éxito como desarrollador Java #Aluratips",
        "category": "BACK END",
        "photo": "https://img.youtube.com/vi/zOetOoeOrOg/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/zOetOoeOrOg?si=siwShX1KF9ECB-z1",
        "description": "¡Descubre el camino hacia el éxito como desarrollador Java! En esta entrevista, exploramos los secretos del mundo Java y respondemos a tus preguntas clave"
    },
    {
        "id": 11,
        "title": "¿Qué son las Soft Skills?",
        "category": "INNOVACIÓN Y GESTIÓN",
        "photo": "https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/vhwspfvI52k?si=jWQPbz3Ph7gX03Zb",
        "description": "¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día."
    },
    {
        "id": 12,
        "title": "7 Soft Skills más deseadas por las empresas",
        "category": "INNOVACIÓN Y GESTIÓN",
        "photo": "https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/YhR7Zp8NUzE?si=ky6cHgq598bnyowv",
        "description":"Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? Quédate en este video con nosotros que vamos a explicarte la importancia de estas habilidades y porque son tan requeridas en el mercado laboral."
    },
    {
        "id": 13,
        "title": "Ventajas de las metodologías Ágiles",
        "category": "INNOVACIÓN Y GESTIÓN",
        "photo": "https://i.ytimg.com/vi/p4kpHAvQH9w/mqdefault.jpg",
        "link": "https://www.youtube.com/embed/p4kpHAvQH9w?si=fqmLwmIBBSzg93o5",
        "description": "En nuestra 6a edición del Café Punto Tech, hablaremos con Elizabeth León y Andyara Pedrosa dos expertas en area de la metodología Agile, la cual permite adaptar la forma en que un equipo trabaja a los requerimientos del proyecto. Agile es una nueva forma de trabajar, para cumplir con el desarrollo del proyecto de una manera rápida, flexible y adaptada a las circunstancias. Nuestras invitadas van a contarnos las principales ventajas de las metodologías Ágiles."
    },
    {
        "id": 14,
        "title": "Entendiendo la importancia de Linkedin #AluraTips",
        "category": "INNOVACIÓN Y GESTIÓN",
        "photo": "https://img.youtube.com/vi/N9vxfMJEyYg/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/N9vxfMJEyYg?si=YvgvrLLcPxTXlK4q",
        "description": "¿Ya tienes un perfil en Linkedin? ¿Sabes cuál es la importancia en tenerlo? En el video de hoy vamos a hablar de la importancia de la red social laboral más grande del mundo."
    },
    {
        "id": 15,
        "title": "Webserie IA: Utiliza ChatGPT para practicar inglés",
        "category": "INNOVACIÓN Y GESTIÓN",
        "photo": "https://img.youtube.com/vi/Yz-6uHdwBPE/maxresdefault.jpg",
        "link": "https://www.youtube.com/embed/Yz-6uHdwBPE?si=fgk1cHKtTcSnU1Yz",
        "description": "Ya no es novedad que las inteligencias artificiales existen para ayudarnos con nuestras tareas laborales y del día a día, pero ¿sabías que puedes aprender y practicar inglés utilizando una IA? En este video, Christian Velasco, nos enseña como podemos utilizar el ChatGPT para practicar inglés."
    }
];

export default cardsData;
