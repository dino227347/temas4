const preguntas = [
    // ==========================================
    // PREGUNTAS DIFÍCILES DE QUÍMICA (IDs 1-10)
    // ==========================================
    {
        "id": 1,
        "pregunta": "¿Qué filósofo presocrático propuso la teoría del 'Nous' como inteligencia ordenadora del universo, y cómo influyó esta idea en la filosofía de Aristóteles?",
        "opciones": [
            "Anaxágoras de Clazomene, quien consideró que el Nous era una sustancia infinita, autónoma y separada de la materia, idea que influyó en el concepto aristotélico del 'motor inmóvil'",
            "Sócrates, quien lo relacionó con la ética",
            "Platón, quien lo asoció con el mundo de las ideas",
            "Empédocles, quien lo consideró una fuerza de atracción"
        ],
        "correcta": 0
    },
    {
        "id": 2,
        "pregunta": "¿Cuál de los siguientes experimentos fue crucial para demostrar que el átomo no era la partícula fundamental indivisible y que contenía partículas subatómicas con carga?",
        "opciones": [
            "Experimento del tubo de rayos catódicos de Thomson",
            "Experimento de la lámina de oro de Rutherford",
            "Experimento del aceite de Millikan",
            "Experimento de la balanza de torsión de Cavendish"
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "¿Qué propiedad de los líquidos está relacionada con la tensión superficial y cómo se explica a nivel molecular?",
        "opciones": [
            "La tensión superficial es la fuerza que actúa en la superficie de un líquido, debido a que las moléculas en la superficie tienen menos vecinos y experimentan una fuerza neta hacia el interior, lo que minimiza el área superficial",
            "La tensión superficial es la capacidad de un líquido para disolver solutos",
            "La tensión superficial es la resistencia de un líquido a fluir",
            "La tensión superficial es la fuerza de atracción entre moléculas de diferentes líquidos"
        ],
        "correcta": 0
    },
    {
        "id": 4,
        "pregunta": "¿Cuál de los siguientes enunciados sobre el estado de plasma es correcto según el texto?",
        "opciones": [
            "El plasma es un gas ionizado que contiene electrones libres e iones positivos, y es neutro eléctricamente en su conjunto; constituye el 99% de la materia visible del universo",
            "El plasma es un estado de la materia que solo se encuentra en la Tierra",
            "El plasma no conduce la electricidad porque sus partículas no tienen carga neta",
            "El plasma se forma a temperaturas muy bajas, cercanas al cero absoluto"
        ],
        "correcta": 0
    },
    {
        "id": 5,
        "pregunta": "Según la teoría de las interacciones de van der Waals, ¿qué tipo de fuerzas son responsables de la atracción entre moléculas apolares como el Cl2 y cómo se originan?",
        "opciones": [
            "Fuerzas de dispersión de London, originadas por dipolos instantáneos que se forman por fluctuaciones en la distribución de electrones",
            "Interacciones dipolo-dipolo, originadas por dipolos permanentes",
            "Puentes de hidrógeno, originados por átomos de H unidos a O, N o F",
            "Interacciones ión-dipolo, originadas por la atracción entre iones y dipolos"
        ],
        "correcta": 0
    },
    {
        "id": 6,
        "pregunta": "¿Cómo se puede predecir la geometría molecular de una sustancia utilizando la teoría de Repulsión de los Pares de Electrones de la Capa de Valencia (TRPECV)?",
        "opciones": [
            "Los pares de electrones de valencia se repelen y adoptan una disposición que minimiza esta repulsión; la geometría depende del número de pares enlazantes y no enlazantes",
            "La geometría se predice solo por el número de átomos en la molécula",
            "La geometría se predice por la electronegatividad de los átomos centrales",
            "La geometría se predice por la masa molar de la molécula"
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la configuración electrónica del estado fundamental de un elemento es correcta según el principio de Aufbau?",
        "opciones": [
            "Los electrones llenan los orbitales en orden creciente de energía: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, etc.",
            "Los electrones llenan primero los orbitales de mayor energía",
            "Los electrones ocupan orbitales de manera aleatoria",
            "Los electrones llenan todos los orbitales de un subnivel antes de pasar al siguiente"
        ],
        "correcta": 0
    },
    {
        "id": 8,
        "pregunta": "¿Cómo se relaciona el radio atómico con la energía de ionización en un período de la tabla periódica?",
        "opciones": [
            "Al disminuir el radio atómico (de izquierda a derecha), la energía de ionización aumenta debido a la mayor atracción nuclear sobre los electrones más externos",
            "Al aumentar el radio atómico, la energía de ionización también aumenta",
            "No hay relación entre el radio atómico y la energía de ionización",
            "La energía de ionización es constante a lo largo de un período"
        ],
        "correcta": 0
    },
    {
        "id": 9,
        "pregunta": "¿Qué es la afinidad electrónica y cómo varía en un grupo de la tabla periódica?",
        "opciones": [
            "Es la energía liberada al añadir un electrón a un átomo en estado gaseoso; generalmente disminuye al bajar en un grupo, pero hay excepciones como el cloro que tiene alta afinidad electrónica",
            "Es la energía necesaria para quitar un electrón; aumenta al bajar en un grupo",
            "Es la capacidad de un átomo para atraer electrones en un enlace; no varía en los grupos",
            "Es la energía necesaria para formar un enlace iónico"
        ],
        "correcta": 0
    },
    {
        "id": 10,
        "pregunta": "¿Cuál de las siguientes parejas de compuestos muestra correctamente la relación de masas de oxígeno que se combinan con una masa fija de nitrógeno, ejemplificando la ley de las proporciones múltiples?",
        "opciones": [
            "NO y NO2: en NO, 16 g de O se combinan con 14 g de N; en NO2, 32 g de O se combinan con 14 g de N; relación 1:2",
            "N2O y N2O3: relación 1:3",
            "N2O y NO2: relación 1:2",
            "NO y N2O: relación 1:2"
        ],
        "correcta": 0
    },
    // ==========================================
// LENGUAJE - EXAMEN 3 (IDs 11-20)
// ==========================================
{
    "id": 11,
    "pregunta": "Según las normas de acentuación, la palabra 'cómplice' lleva tilde porque es:",
    "opciones": [
        "Aguda terminada en vocal",
        "Grave terminada en consonante",
        "Esdrújula",
        "Sobresdrújula"
    ],
    "correcta": 2
},
{
    "id": 12,
    "pregunta": "En la oración 'No sé si vendrá', la palabra 'sé' lleva tilde porque es:",
    "opciones": [
        "Pronombre personal",
        "Verbo saber",
        "Verbo ser",
        "Conjunción condicional"
    ],
    "correcta": 1
},
{
    "id": 13,
    "pregunta": "La palabra 'aún' lleva tilde cuando equivale a:",
    "opciones": [
        "Pero",
        "Todavía",
        "Incluso",
        "Ni siquiera"
    ],
    "correcta": 1
},
{
    "id": 14,
    "pregunta": "¿Cuál de las siguientes oraciones utiliza correctamente la COMA VOCATIVA?",
    "opciones": [
        "Juan, ven aquí por favor",
        "Juan ven, aquí por favor",
        "Juan ven aquí, por favor",
        "Juan ven aquí por, favor"
    ],
    "correcta": 0
},
{
    "id": 15,
    "pregunta": "Los DOS PUNTOS se utilizan para anunciar una enumeración. ¿Cuál de las siguientes oraciones es correcta?",
    "opciones": [
        "Los colores primarios son: rojo, azul y amarillo",
        "Los colores primarios son rojo: azul y amarillo",
        "Los colores primarios son rojo, azul: y amarillo",
        "Los colores primarios: son rojo, azul y amarillo"
    ],
    "correcta": 0
},
{
    "id": 16,
    "pregunta": "¿Cuál de las siguientes palabras está correctamente escrita con 's'?",
    "opciones": [
        "Comienso",
        "Consienso",
        "Comienzo",
        "Consienzo"
    ],
    "correcta": 2
},
{
    "id": 17,
    "pregunta": "¿Cuál de las siguientes palabras se escribe con 'v'?",
    "opciones": [
        "Besar",
        "Bivir",
        "Vivir",
        "Bien"
    ],
    "correcta": 2
},
{
    "id": 18,
    "pregunta": "Las palabras que comienzan con el prefijo 'hipo-' (debajo de) se escriben con:",
    "opciones": [
        "Sin h",
        "Con h",
        "Con g",
        "Con j"
    ],
    "correcta": 1
},
{
    "id": 19,
    "pregunta": "El prefijo 'bradi-' en el término médico 'bradicardia' significa:",
    "opciones": [
        "Rápido",
        "Lento",
        "Dolor",
        "Inflamación"
    ],
    "correcta": 1
},
{
    "id": 20,
    "pregunta": "El sufijo '-algia' en el término 'artralgia' significa:",
    "opciones": [
        "Inflamación",
        "Dolor",
        "Extirpación",
        "Estudio"
    ],
    "correcta": 1
},
// ==========================================
// FÍSICA - EXAMEN 2 (IDs 21-30)
// ==========================================
{
    "id": 21,
    "pregunta": "Un bloque de 5 kg se desliza por un plano inclinado de 30° sin fricción. Si parte del reposo y recorre 8 m sobre el plano, ¿cuál es su velocidad al final? (g = 9.8 m/s²)",
    "opciones": [
        "v = 8.85 m/s",
        "v = 6.26 m/s",
        "v = 12.52 m/s",
        "v = 4.42 m/s"
    ],
    "correcta": 0
},
{
    "id": 22,
    "pregunta": "Un automóvil de 1200 kg viaja a 30 m/s y frena con una desaceleración constante de 6 m/s². ¿Qué distancia recorre hasta detenerse?",
    "opciones": [
        "d = 75 m",
        "d = 150 m",
        "d = 37.5 m",
        "d = 300 m"
    ],
    "correcta": 0
},
{
    "id": 23,
    "pregunta": "Dos masas de 2 kg y 6 kg están conectadas por una cuerda que pasa por una polea sin fricción. ¿Cuál es la aceleración del sistema? (g = 9.8 m/s²)",
    "opciones": [
        "a = 4.9 m/s²",
        "a = 2.45 m/s²",
        "a = 7.35 m/s²",
        "a = 9.8 m/s²"
    ],
    "correcta": 0
},
{
    "id": 24,
    "pregunta": "Un proyectil se lanza horizontalmente desde una altura de 45 m con velocidad de 20 m/s. ¿Cuánto tiempo tarda en llegar al suelo? (g = 9.8 m/s²)",
    "opciones": [
        "t = 3.03 s",
        "t = 2.14 s",
        "t = 4.28 s",
        "t = 1.52 s"
    ],
    "correcta": 0
},
{
    "id": 25,
    "pregunta": "Un cuerpo de 10 kg se encuentra en reposo sobre una superficie horizontal con μₛ = 0.5 y μₖ = 0.3. Si se aplica una fuerza horizontal de 40 N, ¿qué ocurre? (g = 9.8 m/s²)",
    "opciones": [
        "El objeto no se mueve porque la fricción estática máxima es 49 N",
        "El objeto se mueve con aceleración de 1.06 m/s²",
        "El objeto se mueve con velocidad constante",
        "El objeto se mueve con aceleración de 4 m/s²"
    ],
    "correcta": 0
},
{
    "id": 26,
    "pregunta": "Desde una altura de 80 m se deja caer una piedra. ¿Con qué velocidad llega al suelo? (g = 9.8 m/s²)",
    "opciones": [
        "v = 39.6 m/s",
        "v = 28.0 m/s",
        "v = 56.0 m/s",
        "v = 19.8 m/s"
    ],
    "correcta": 0
},
{
    "id": 27,
    "pregunta": "Un auto de 800 kg toma una curva de radio 50 m a 20 m/s. ¿Cuál es la fuerza centrípeta necesaria?",
    "opciones": [
        "F_c = 6400 N",
        "F_c = 3200 N",
        "F_c = 12800 N",
        "F_c = 1600 N"
    ],
    "correcta": 0
},
{
    "id": 28,
    "pregunta": "Un bloque de 4 kg es empujado hacia arriba por un plano inclinado de 37° con una fuerza de 50 N paralela al plano. Si el coeficiente de fricción cinética es 0.25, ¿cuál es la aceleración? (g = 9.8 m/s²)",
    "opciones": [
        "a = 2.15 m/s²",
        "a = 4.52 m/s²",
        "a = 0.98 m/s²",
        "a = 6.32 m/s²"
    ],
    "correcta": 0
},
{
    "id": 29,
    "pregunta": "Un péndulo simple de 1.5 m de longitud oscila con un período de 2.46 s. ¿Cuál es el valor de la gravedad en ese lugar?",
    "opciones": [
        "g = 9.78 m/s²",
        "g = 8.50 m/s²",
        "g = 10.20 m/s²",
        "g = 7.80 m/s²"
    ],
    "correcta": 0
},
{
    "id": 30,
    "pregunta": "Un cuerpo de 3 kg se mueve con velocidad de 8 m/s y choca elásticamente con otro de 5 kg en reposo. ¿Cuál es la velocidad del primer cuerpo después del choque?",
    "opciones": [
        "v₁ = -2 m/s",
        "v₁ = 2 m/s",
        "v₁ = 4 m/s",
        "v₁ = -4 m/s"
    ],
    "correcta": 0
},
// ==========================================
// MATEMÁTICAS - EXAMEN 4 (IDs 31-40)
// ==========================================
{
    "id": 31,
    "pregunta": "Simplifique: (x^(2a) · y^(2b) · z^(2c)) / (x^a · y^b · z^c)^2. ¿Cuál es el resultado?",
    "opciones": [
        "1",
        "x^a · y^b · z^c",
        "x^(a²) · y^(b²) · z^(c²)",
        "x^(2a²) · y^(2b²) · z^(2c²)"
    ],
    "correcta": 0
},
{
    "id": 32,
    "pregunta": "Calcule: √[5]{32x¹⁰y¹⁵}. ¿Cuál es el resultado simplificado?",
    "opciones": [
        "2x²y³",
        "2x³y²",
        "4x²y³",
        "2x²y²"
    ],
    "correcta": 0
},
{
    "id": 33,
    "pregunta": "Sean A = {x ∈ Z / x² - 9 = 0} y B = {x ∈ Z / x es impar y x < 7}. Determine A ∪ B.",
    "opciones": [
        "{-3, 1, 3, 5}",
        "{-3, 3, 1, 3, 5}",
        "{-3, -1, 1, 3, 5}",
        "{-3, 3, 1, 5, 7}"
    ],
    "correcta": 0
},
{
    "id": 34,
    "pregunta": "Simplifique la fórmula lógica: (p ∧ q) ∨ (¬p ∨ ¬q). ¿Qué resultado se obtiene?",
    "opciones": [
        "Verdadero (Tautología)",
        "Falso (Contradicción)",
        "Contingencia",
        "Depende de p y q"
    ],
    "correcta": 0
},
{
    "id": 35,
    "pregunta": "Dados los polinomios P(x) = 6x² - 3x + 2 y Q(x) = 4x² + 7x - 3, calcule 2P(x) - Q(x).",
    "opciones": [
        "8x² - 13x + 7",
        "8x² + 13x + 7",
        "8x² - 13x - 7",
        "8x² + 13x - 7"
    ],
    "correcta": 0
},
{
    "id": 36,
    "pregunta": "Multiplique: (x² - 2x + 3)(x² + 3x - 4). ¿Cuál es el resultado?",
    "opciones": [
        "x⁴ + x³ - 7x² + 17x - 12",
        "x⁴ + x³ + 7x² + 17x - 12",
        "x⁴ - x³ - 7x² + 17x - 12",
        "x⁴ + x³ - 7x² - 17x - 12"
    ],
    "correcta": 0
},
{
    "id": 37,
    "pregunta": "Simplifique: (x^(3n+2) · x^(n-1)) / (x^(2n+3) · x^(2n-2)). ¿Cuál es el exponente final de x?",
    "opciones": [
        "2n - 2",
        "2n + 2",
        "n - 2",
        "n + 2"
    ],
    "correcta": 0
},
{
    "id": 38,
    "pregunta": "Calcule el residuo de la división: (x³ - x² - 42x) ÷ (x - 6).",
    "opciones": [
        "R(x) = 0",
        "R(x) = 6",
        "R(x) = -6",
        "R(x) = 42"
    ],
    "correcta": 0
},
{
    "id": 39,
    "pregunta": "Racionalice: 10 / (√[5]{8}). Exprese en su forma más simplificada.",
    "opciones": [
        "5√[5]{16}",
        "5√[5]{8}",
        "10√[5]{16}",
        "√[5]{16}"
    ],
    "correcta": 0
},
{
    "id": 40,
    "pregunta": "En un grupo de 80 pacientes, 45 presentan fiebre, 30 presentan tos y 20 presentan ambos síntomas. ¿Cuántos no presentan ninguno de los dos síntomas?",
    "opciones": [
        "25",
        "20",
        "30",
        "15"
    ],
    "correcta": 0
},
// ==========================================
// BIOLOGÍA - EXAMEN 4 (IDs 41-50)
// ==========================================
{
    "id": 41,
    "pregunta": "La membrana celular contiene carbohidratos en su superficie externa formando el glucocaliz. ¿Cuál de las siguientes funciones NO corresponde al glucocaliz?",
    "opciones": [
        "Participa en el reconocimiento celular y adhesión entre células.",
        "Actúa como barrera de protección contra daños mecánicos.",
        "Permite la difusión simple de moléculas hidrofóbicas.",
        "Contribuye a la estabilidad de la membrana celular."
    ],
    "correcta": 2
},
{
    "id": 42,
    "pregunta": "La endocitosis es un mecanismo de transporte de moléculas grandes hacia el interior de la célula. ¿Cuál de los siguientes procesos es un tipo de endocitosis?",
    "opciones": [
        "La fagocitosis, donde la célula envuelve partículas sólidas o bacterias.",
        "La exocitosis, donde las vesículas se fusionan con la membrana para liberar contenido.",
        "La difusión facilitada mediante proteínas transportadoras.",
        "El transporte activo primario mediante bombas ATPasas."
    ],
    "correcta": 0
},
{
    "id": 43,
    "pregunta": "El poro nuclear permite el intercambio de moléculas entre el núcleo y el citoplasma. ¿Cuál de las siguientes afirmaciones sobre el poro nuclear es correcta?",
    "opciones": [
        "El poro nuclear tiene un diámetro total de 100 nm y permite el paso libre de pequeñas moléculas hidrosolubles, pero requiere transporte activo para moléculas grandes como proteínas y ácidos nucleicos.",
        "El poro nuclear es una abertura simple en la membrana nuclear sin estructura proteica asociada.",
        "El poro nuclear permite el paso de cualquier molécula sin restricción de tamaño.",
        "El poro nuclear solo permite el paso de iones pequeños, excluyendo todas las proteínas."
    ],
    "correcta": 0
},
{
    "id": 44,
    "pregunta": "El nucléolo es una estructura dentro del núcleo celular. ¿Cuál es su función principal?",
    "opciones": [
        "La biosíntesis de ribosomas mediante la transcripción de ARN ribosomal y su ensamblaje con proteínas ribosómicas.",
        "La replicación del ADN durante la división celular.",
        "La síntesis de proteínas mediante ribosomas adheridos.",
        "El almacenamiento de lípidos y carbohidratos."
    ],
    "correcta": 0
},
{
    "id": 45,
    "pregunta": "Los peroxisomas son organelos que contienen enzimas oxidativas. ¿Cuál de las siguientes funciones es característica de los peroxisomas?",
    "opciones": [
        "La degradación del peróxido de hidrógeno (H₂O₂) mediante la enzima catalasa, protegiendo a la célula del daño oxidativo.",
        "La síntesis de proteínas mediante ribosomas adheridos a su membrana.",
        "La producción de ATP mediante fosforilación oxidativa.",
        "La digestión de bacterias y partículas extrañas mediante fagocitosis."
    ],
    "correcta": 0
},
{
    "id": 46,
    "pregunta": "Los cilios y flagelos son estructuras móviles presentes en algunas células eucariotas. ¿Cuál es la diferencia principal entre cilios y flagelos?",
    "opciones": [
        "Los cilios son más cortos y numerosos, con un movimiento de batido similar a un remo, mientras que los flagelos son más largos, pocos y tienen un movimiento ondulatorio.",
        "Los cilios tienen una estructura 9+2 (nueve dobletes externos y dos centrales), mientras que los flagelos tienen estructura 9+0.",
        "Los cilios se encuentran solo en células vegetales, mientras que los flagelos solo en células animales.",
        "Los cilios son inmóviles, mientras que los flagelos siempre son móviles."
    ],
    "correcta": 0
},
{
    "id": 47,
    "pregunta": "El citoesqueleto está compuesto por diferentes tipos de filamentos. ¿Cuál de los siguientes filamentos es el más delgado y está involucrado en la contracción muscular y el movimiento celular?",
    "opciones": [
        "Los filamentos de actina (microfilamentos).",
        "Los filamentos intermedios.",
        "Los microtúbulos.",
        "Los filamentos de miosina."
    ],
    "correcta": 0
},
{
    "id": 48,
    "pregunta": "El ribosoma está compuesto por dos subunidades: una grande (60S) y una pequeña (40S) en células eucariotas. ¿Cuál es la función de la subunidad pequeña (40S) durante la síntesis de proteínas?",
    "opciones": [
        "Se une al ARN mensajero (ARNm) y participa en la iniciación de la traducción.",
        "Cataliza la formación del enlace peptídico entre los aminoácidos.",
        "Transporta los aminoácidos al ribosoma mediante ARNt.",
        "Sintetiza ARN ribosomal a partir de ADN."
    ],
    "correcta": 0
},
{
    "id": 49,
    "pregunta": "Durante la endocitosis mediada por receptor, las moléculas se unen a receptores específicos en la membrana plasmática. ¿Qué estructura facilita la invaginación de la membrana en este proceso?",
    "opciones": [
        "La proteína clatrina, que forma una cubierta en la vesícula endocítica.",
        "La caveolina, que forma vesículas en forma de matraz.",
        "La calmodulina, que regula la concentración de calcio intracelular.",
        "La actina, que forma el citoesqueleto subyacente."
    ],
    "correcta": 0
},
{
    "id": 50,
    "pregunta": "Las mitocondrias tienen su propio material genético (ADN mitocondrial). ¿Cuál de las siguientes características describe correctamente el ADN mitocondrial?",
    "opciones": [
        "Es circular, bicatenario y se hereda por vía materna (citoplasmática).",
        "Es lineal, similar al ADN nuclear y se hereda por vía paterna.",
        "Es circular y se encuentra en el espacio intermembranoso.",
        "Es lineal y codifica todas las proteínas mitocondriales."
    ],
    "correcta": 0
},
// ==========================================
// ANATOMÍA - EXAMEN 4 (IDs 51-60)
// ==========================================
{
    "id": 51,
    "pregunta": "El componente inorgánico del hueso está formado principalmente por hidroxiapatita. ¿Cuál es la fórmula química de la hidroxiapatita?",
    "opciones": [
        "Ca10(PO4)6(OH)2",
        "Ca3(PO4)2",
        "CaCO3",
        "Ca5(PO4)3(OH)"
    ],
    "correcta": 0
},
{
    "id": 52,
    "pregunta": "La osteocalcina es una proteína fijadora de calcio presente en el hueso. ¿Cuál es su función principal?",
    "opciones": [
        "Facilita la precipitación y cristalización de la hidroxiapatita alrededor de las fibras de colágeno.",
        "Inicia la resorción ósea mediada por osteoclastos.",
        "Sintetiza colágeno tipo I para la matriz ósea.",
        "Regula la concentración de fósforo en el hueso."
    ],
    "correcta": 0
},
{
    "id": 53,
    "pregunta": "Los huesos largos presentan una diáfisis y dos epífisis. ¿Cuál de las siguientes estructuras se encuentra en la epífisis de los huesos largos en adultos?",
    "opciones": [
        "Tejido esponjoso con médula ósea roja.",
        "Tejido compacto grueso con osteonas.",
        "Cartílago epifisiario de crecimiento.",
        "Cavidad medular con médula ósea amarilla."
    ],
    "correcta": 0
},
{
    "id": 54,
    "pregunta": "Los agujeros nutricios en los huesos permiten el ingreso de vasos sanguíneos. ¿En qué orden se clasifican los agujeros vasculares según su ubicación?",
    "opciones": [
        "Primer orden: diáfisis; segundo orden: epífisis; tercer orden: superficie no articular.",
        "Primer orden: epífisis; segundo orden: diáfisis; tercer orden: superficie articular.",
        "Primer orden: superficie articular; segundo orden: diáfisis; tercer orden: epífisis.",
        "Primer orden: huesos planos; segundo orden: huesos largos; tercer orden: huesos cortos."
    ],
    "correcta": 0
},
{
    "id": 55,
    "pregunta": "Las articulaciones cartilaginosas se dividen en sincondrosis y sinfisis. ¿Cuál de las siguientes afirmaciones sobre la sincondrosis es correcta?",
    "opciones": [
        "Está unida por cartílago hialino, como el cartílago epifisiario de crecimiento.",
        "Está unida por un disco fibrocartilaginoso, como la sínfisis del pubis.",
        "Carece de cavidad sinovial y permite amplio movimiento.",
        "Es una articulación fibrosa que se encuentra en el cráneo."
    ],
    "correcta": 0
},
{
    "id": 56,
    "pregunta": "La membrana sinovial es un componente clave de las articulaciones diartrodiales. ¿Cuál de las siguientes afirmaciones sobre la membrana sinovial es correcta?",
    "opciones": [
        "Tapiza la cara interna de la cápsula articular y produce líquido sinovial.",
        "Recubre las superficies articulares con cartílago hialino.",
        "Refuerza la articulación y limita los movimientos excesivos.",
        "Se inserta en la periferia de las superficies articulares y une los huesos."
    ],
    "correcta": 0
},
{
    "id": 57,
    "pregunta": "El líquido sinovial es un líquido interarticular transparente y viscoso. ¿Cuál de las siguientes funciones NO corresponde al líquido sinovial?",
    "opciones": [
        "Proporciona nutrientes a los osteocitos del hueso subcondral.",
        "Lubrica y facilita el deslizamiento de las superficies articulares.",
        "Disminuye la fricción entre las superficies articulares.",
        "Amortigua los golpes entre las superficies articulares."
    ],
    "correcta": 0
},
{
    "id": 58,
    "pregunta": "La artritis reumatoidea es una enfermedad que afecta a las articulaciones sinoviales. ¿Cuál es el mecanismo fisiopatológico principal de esta enfermedad?",
    "opciones": [
        "Un proceso inflamatorio crónico mediado por anticuerpos que destruye la membrana sinovial y los cartílagos.",
        "La deficiencia de estrógenos que activa la resorción ósea por osteoclastos.",
        "La erosión del cartílago articular por sobrecarga mecánica, propia de la tercera edad.",
        "La acumulación de cristales de urato en la cavidad articular."
    ],
    "correcta": 0
},
{
    "id": 59,
    "pregunta": "Los músculos esqueléticos se clasifican según la disposición de sus fibras respecto al tendón. ¿Cuál de los siguientes músculos es un ejemplo de músculo bipenniforme?",
    "opciones": [
        "El recto femoral (parte del cuádriceps).",
        "El bíceps braquial.",
        "El esternocleidomastoideo.",
        "El deltoides."
    ],
    "correcta": 0
},
{
    "id": 60,
    "pregunta": "La fascia o aponeurosis es una estructura que envuelve a los músculos. ¿Cuál de las siguientes afirmaciones sobre las fascias es correcta?",
    "opciones": [
        "Son membranas fibrosas que envuelven a los músculos, separándolos de los órganos vecinos y conteniéndolos durante la contracción.",
        "Son sacos cerrados que contienen líquido sinovial para reducir la fricción.",
        "Son estructuras que unen los músculos a los huesos transmitiendo la fuerza.",
        "Son tejidos elásticos que permiten el estiramiento muscular."
    ],
    "correcta": 0
}
]