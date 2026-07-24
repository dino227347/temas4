const preguntas = [
    // ==========================================
    // QUÍMICA - Examen 1 (IDs 1-10)
    // ==========================================
    {
        "id": 1,
        "pregunta": "La teoría del 'apeirón' (lo ilimitado) como origen de todas las cosas fue propuesta por Anaximandro. ¿Cuál de las siguientes afirmaciones describe correctamente esta teoría?",
        "opciones": [
            "El apeirón es una sustancia material finita que da origen al agua, aire y fuego",
            "El apeirón es un principio indeterminado, carente de características específicas, del cual se separan las propiedades opuestas que forman la naturaleza",
            "El apeirón es el éter, la quintaesencia que compone el universo",
            "El apeirón es un conjunto de átomos que se mueven en el vacío"
        ],
        "correcta": 1
    },
    {
        "id": 2,
        "pregunta": "Según la 'Teoría del todo en todo' de Anaxágoras, ¿cuál es el papel del 'Nous' o inteligencia en la formación de las cosas?",
        "opciones": [
            "Es una fuerza material que se mezcla con las semillas para darles forma",
            "Es una sustancia ligera, infinita, autónoma y autorregulada que separa y combina las semillas",
            "Es el elemento primordial del que están hechos todos los cuerpos",
            "Es la fuerza de atracción entre átomos que mantiene unida la materia"
        ],
        "correcta": 1
    },
    {
        "id": 3,
        "pregunta": "La obra 'El químico escéptico' (1661) de Robert Boyle criticó los conceptos de Aristóteles y Paracelso. ¿Cuál fue la principal contribución de Boyle a la química moderna?",
        "opciones": [
            "Descubrió el oxígeno y la fotosíntesis",
            "Estableció que las propiedades químicas dependen de la disposición de los corpúsculos y fue pionero en la experimentación con gases",
            "Creó la primera tabla periódica de elementos",
            "Desarrolló la teoría del flogisto para explicar la combustión"
        ],
        "correcta": 1
    },
    {
        "id": 4,
        "pregunta": "La Teoría del Flogisto de Georg Stahl no podía explicar uno de los siguientes fenómenos. ¿Cuál?",
        "opciones": [
            "La combustión del fósforo y el azufre",
            "La reversibilidad de la calcinación",
            "El aumento de peso que acompañaba a la calcinación de metales",
            "La combustión de compuestos orgánicos"
        ],
        "correcta": 2
    },
    {
        "id": 5,
        "pregunta": "Antoine Lavoisier introdujo el aspecto cuantitativo en la química. ¿Cuál de las siguientes afirmaciones sobre su trabajo es INCORRECTA?",
        "opciones": [
            "Demostró que la combustión es una combinación con el oxígeno, no una pérdida de flogisto",
            "Propuso el nombre de oxígeno, que significa 'generador de ácidos'",
            "Consideraba que el calor era un elemento imponderable llamado calórico",
            "Fue el primero en aislar el hidrógeno y determinar sus propiedades"
        ],
        "correcta": 3
    },
    {
        "id": 6,
        "pregunta": "¿Cuál es la principal diferencia entre una propiedad intensiva y una propiedad extensiva de la materia?",
        "opciones": [
            "Las intensivas dependen del tamaño de la muestra, las extensivas no",
            "Las intensivas no dependen de la cantidad de sustancia, las extensivas sí dependen",
            "Las intensivas son solo propiedades organolépticas, las extensivas solo físicas",
            "Las intensivas se miden con balanza, las extensivas con termómetro"
        ],
        "correcta": 1
    },
    {
        "id": 7,
        "pregunta": "Durante la sublimación, una sustancia pasa directamente de sólido a gas. ¿Cuál de los siguientes NO es un ejemplo de sublimación?",
        "opciones": [
            "La naftalina que se convierte en gas para repeler polillas",
            "El yodo que pasa de cristales a un gas morado",
            "La formación de escarcha a partir del aire subcongelado",
            "El arsénico que a 615°C pasa de sólido a gas tóxico"
        ],
        "correcta": 2
    },
    {
        "id": 8,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el Condensado de Bose-Einstein (BEC) es correcta?",
        "opciones": [
            "Es un gas ionizado que conduce electricidad",
            "Se forma a temperaturas muy altas, cerca de la fusión nuclear",
            "Una cantidad macroscópica de partículas pasa al nivel de mínima energía, creando un 'superátomo' más denso que el sólido",
            "Es el estado más común de la materia en el universo"
        ],
        "correcta": 2
    },
    {
        "id": 9,
        "pregunta": "En el modelo atómico de Rutherford, ¿qué evidencia experimental permitió concluir que el átomo tiene un núcleo denso y cargado positivamente?",
        "opciones": [
            "La fluorescencia observada en la pantalla de sulfuro de zinc",
            "Que la mayoría de las partículas alfa atravesaban la lámina sin desviarse",
            "Que algunas partículas alfa eran desviadas en ángulos grandes e incluso rebotaban",
            "La emisión de rayos X al incidir las partículas alfa"
        ],
        "correcta": 2
    },
    {
        "id": 10,
        "pregunta": "¿Cuál es la diferencia fundamental entre un enlace covalente polar y un enlace covalente no polar?",
        "opciones": [
            "En el polar los átomos comparten electrones, en el no polar se transfieren",
            "En el polar hay una diferencia de electronegatividad entre los átomos, en el no polar los átomos tienen igual electronegatividad",
            "En el polar los electrones se mueven libremente, en el no polar están fijos",
            "En el polar se forman iones, en el no polar no"
        ],
        "correcta": 1
    },
    // ==========================================
// LENGUAJE - EXAMEN 1 (IDs 11-20)
// ==========================================
{
    "id": 11,
    "pregunta": "La palabra 'cáncer' lleva tilde porque es una palabra:",
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
    "pregunta": "En la oración 'Sé fuerte y no te rindas', la palabra 'sé' lleva tilde porque es:",
    "opciones": [
        "Pronombre personal",
        "Verbo ser",
        "Verbo saber",
        "Conjunción condicional"
    ],
    "correcta": 1
},
{
    "id": 13,
    "pregunta": "La palabra 'té' (infusión) lleva tilde para distinguirse de:",
    "opciones": [
        "Te (pronombre)",
        "Te (verbo)",
        "Té (sustantivo)",
        "Té (adjetivo)"
    ],
    "correcta": 0
},
{
    "id": 14,
    "pregunta": "En la oración 'Mi hermano, el médico, trabaja en el hospital', las comas se usan para:",
    "opciones": [
        "Separar elementos de una enumeración",
        "Encerrar una aposición explicativa",
        "Indicar un vocativo",
        "Separar complementos circunstanciales"
    ],
    "correcta": 1
},
{
    "id": 15,
    "pregunta": "Los DOS PUNTOS se utilizan para anunciar una cita textual. ¿Cuál de las siguientes oraciones es correcta?",
    "opciones": [
        "El doctor dijo que debes descansar",
        "El doctor dijo: 'Debes descansar'",
        "El doctor dijo, debes descansar",
        "El doctor dijo; debes descansar"
    ],
    "correcta": 1
},
{
    "id": 16,
    "pregunta": "¿Cuál de las siguientes palabras se escribe correctamente con 'c'?",
    "opciones": [
        "Conciencia",
        "Consiensia",
        "Conciensia",
        "Consiencia"
    ],
    "correcta": 0
},
{
    "id": 17,
    "pregunta": "¿Cuál de las siguientes palabras se escribe con 'v'?",
    "opciones": [
        "Bariedad",
        "Variedad",
        "Baridad",
        "Varidad"
    ],
    "correcta": 1
},
{
    "id": 18,
    "pregunta": "¿Cuál de las siguientes palabras se escribe con 'h'?",
    "opciones": [
        "Ala",
        "Hala",
        "Ala",
        "Ala"
    ],
    "correcta": 1
},
{
    "id": 19,
    "pregunta": "El prefijo 'hipo-' en el término 'hipotermia' significa:",
    "opciones": [
        "Exceso",
        "Déficit",
        "Dolor",
        "Inflamación"
    ],
    "correcta": 1
},
{
    "id": 20,
    "pregunta": "El sufijo '-osis' en el término 'artrosis' indica:",
    "opciones": [
        "Inflamación",
        "Degeneración",
        "Tumor",
        "Dolor"
    ],
    "correcta": 1
},
// ==========================================
// FÍSICA - EXAMEN 3 (IDs 21-30)
// ==========================================
{
    "id": 21,
    "pregunta": "Un cuerpo de 5 kg se encuentra sobre una superficie horizontal sin fricción. Si se le aplica una fuerza constante de 20 N durante 6 s, partiendo del reposo. ¿Cuál es su velocidad final y la distancia recorrida?",
    "opciones": [
        "v = 24 m/s, d = 72 m",
        "v = 12 m/s, d = 36 m",
        "v = 30 m/s, d = 90 m",
        "v = 18 m/s, d = 54 m"
    ],
    "correcta": 0
},
{
    "id": 22,
    "pregunta": "Dos vectores de módulos 10 y 15 unidades forman un ángulo de 120°. ¿Cuál es el módulo del vector resultante?",
    "opciones": [
        "R = 13.23 unidades",
        "R = 18.03 unidades",
        "R = 21.79 unidades",
        "R = 25 unidades"
    ],
    "correcta": 0
},
{
    "id": 23,
    "pregunta": "Un bloque de 12 kg se desliza por un plano inclinado de 40° con coeficiente de fricción cinética 0.25. Determine la aceleración del bloque. (g = 9.8 m/s²)",
    "opciones": [
        "a = 4.42 m/s²",
        "a = 3.15 m/s²",
        "a = 6.30 m/s²",
        "a = 5.87 m/s²"
    ],
    "correcta": 0
},
{
    "id": 24,
    "pregunta": "Se lanza un proyectil desde una altura de 50 m con velocidad horizontal de 30 m/s. ¿Cuánto tiempo tarda en llegar al suelo? (g = 9.8 m/s²)",
    "opciones": [
        "t = 3.19 s",
        "t = 2.24 s",
        "t = 4.52 s",
        "t = 1.43 s"
    ],
    "correcta": 0
},
{
    "id": 25,
    "pregunta": "Un cuerpo de 0.5 kg atado a una cuerda de 1.2 m gira en un círculo vertical. Si la tensión en el punto más bajo es 25 N, ¿cuál es la velocidad del cuerpo en ese punto? (g = 9.8 m/s²)",
    "opciones": [
        "v = 6.97 m/s",
        "v = 4.85 m/s",
        "v = 8.52 m/s",
        "v = 3.46 m/s"
    ],
    "correcta": 0
},
{
    "id": 26,
    "pregunta": "Una persona de 70 kg está en un ascensor que acelera hacia arriba a 2 m/s². ¿Cuál es el peso aparente de la persona? (g = 9.8 m/s²)",
    "opciones": [
        "P_aparente = 826 N",
        "P_aparente = 686 N",
        "P_aparente = 546 N",
        "P_aparente = 980 N"
    ],
    "correcta": 0
},
{
    "id": 27,
    "pregunta": "Una máquina de Atwood tiene masas de 2 kg y 6 kg. Si se libera desde el reposo, ¿cuál es la aceleración y la tensión? (g = 9.8 m/s²)",
    "opciones": [
        "a = 4.9 m/s², T = 29.4 N",
        "a = 2.45 m/s², T = 39.2 N",
        "a = 3.92 m/s², T = 19.6 N",
        "a = 1.96 m/s², T = 49 N"
    ],
    "correcta": 0
},
{
    "id": 28,
    "pregunta": "Un objeto cae libremente desde el reposo durante 4 s. ¿Cuál es su velocidad y la distancia recorrida? (g = 9.8 m/s²)",
    "opciones": [
        "v = 39.2 m/s, d = 78.4 m",
        "v = 19.6 m/s, d = 39.2 m",
        "v = 29.4 m/s, d = 58.8 m",
        "v = 49 m/s, d = 98 m"
    ],
    "correcta": 0
},
{
    "id": 29,
    "pregunta": "Un resorte se estira 0.08 m al colgarle una masa de 2 kg. ¿Cuál es la constante elástica del resorte? (g = 9.8 m/s²)",
    "opciones": [
        "k = 245 N/m",
        "k = 122.5 N/m",
        "k = 196 N/m",
        "k = 98 N/m"
    ],
    "correcta": 0
},
{
    "id": 30,
    "pregunta": "Un cuerpo de 4 kg se mueve con velocidad de 8 m/s. ¿Cuál es su energía cinética? Si su velocidad se duplica, ¿cuánto aumenta su energía cinética?",
    "opciones": [
        "E_c = 128 J, aumenta 384 J",
        "E_c = 64 J, aumenta 192 J",
        "E_c = 256 J, aumenta 768 J",
        "E_c = 32 J, aumenta 96 J"
    ],
    "correcta": 0
},
// ==========================================
// MATEMÁTICAS - EXAMEN 1 (IDs 31-40)
// ==========================================
{
    "id": 31,
    "pregunta": "Dados los polinomios P(x) = 3x² + 5x - 6, Q(x) = 5x² + 8x - 9 y R(x) = 3x + 4, calcule P(x) + Q(x) - R(x). ¿Cuál es el resultado simplificado?",
    "opciones": [
        "8x² + 10x - 19",
        "8x² + 13x - 15",
        "8x² - 10x - 15",
        "-8x² + 10x + 15"
    ],
    "correcta": 0
},
{
    "id": 32,
    "pregunta": "Multiplique los polinomios P(x) = 4x² - 13x + 20 y Q(x) = 10x² - 7x + 8. ¿Cuál es el polinomio resultante?",
    "opciones": [
        "40x⁴ - 158x³ + 323x² - 244x + 160",
        "40x⁴ + 158x³ + 323x² + 244x + 160",
        "40x⁴ - 158x³ - 323x² - 244x - 160",
        "40x⁴ + 158x³ - 323x² + 244x - 160"
    ],
    "correcta": 0
},
{
    "id": 33,
    "pregunta": "Realice la división: (x³ - 3x² + 6x - 2) ÷ (x² + x - 1). ¿Cuál es el cociente y el residuo correcto?",
    "opciones": [
        "C(x) = x - 4, R(x) = 11x - 6",
        "C(x) = x - 4, R(x) = x - 16",
        "C(x) = x + 2, R(x) = 7x - 4",
        "C(x) = x - 2, R(x) = 5x - 3"
    ],
    "correcta": 0
},
{
    "id": 34,
    "pregunta": "Simplifique la expresión: [(x^y)^x]^y · (y^x)^y · [(x^y)^y]^x, dado que x + y = 1 y xy = 2. ¿Cuál es el resultado?",
    "opciones": [
        "x²y²",
        "x⁴y³",
        "x²y",
        "4"
    ],
    "correcta": 0
},
{
    "id": 35,
    "pregunta": "Simplifique: √[n]{(x^n + y^n) / (x^{-n} + y^{-n})}. ¿Cuál es la expresión simplificada?",
    "opciones": [
        "xy",
        "x/y",
        "√[n]{xy}",
        "x^n y^n"
    ],
    "correcta": 0
},
{
    "id": 36,
    "pregunta": "Calcule: (20^(k+1) / (4^(k+2) + 2^(2(k+1))))^(1/k). ¿Cuál es el valor simplificado?",
    "opciones": [
        "5",
        "5^k",
        "5^(1/k)",
        "5^(k+1)"
    ],
    "correcta": 0
},
{
    "id": 37,
    "pregunta": "Simplifique: (5·2^x + 3·2^(x+1) + 12·2^(x-1)) / (11·2^x - 2^(x+2)). ¿Cuál es el valor?",
    "opciones": [
        "17/7",
        "14/8",
        "2^x",
        "5/3"
    ],
    "correcta": 0
},
{
    "id": 38,
    "pregunta": "Calcule el resto de la división: (x⁴ + 3x³ - 2x² + 5x - 6) ÷ (x + 1). ¿Cuál es el residuo?",
    "opciones": [
        "R(x) = -15",
        "R(x) = 15",
        "R(x) = x + 6",
        "R(x) = 0"
    ],
    "correcta": 0
},
{
    "id": 39,
    "pregunta": "Racionalice el denominador: 36x / √[4]{2x²}. Exprese en su forma más simplificada.",
    "opciones": [
        "18x√[4]{8x²}",
        "18x√[4]{2x²}",
        "36x√[4]{2x²}",
        "18√[4]{8x⁵}"
    ],
    "correcta": 0
},
{
    "id": 40,
    "pregunta": "Determine el exponente final de x en la expresión: √{x^(3/4)√{x^(3/4)√{x⁸}}(x²)^(-3)} / (x³)^(-2).",
    "opciones": [
        "El exponente es 4",
        "El exponente es -5",
        "El exponente es 1",
        "El exponente es 8"
    ],
    "correcta": 0
},
// ==========================================
// BIOLOGÍA - EXAMEN 1 (IDs 41-50)
// ==========================================
{
    "id": 41,
    "pregunta": "Durante la glucólisis aeróbica, la glucosa se degrada a dos moléculas de ácido pirúvico. Si una célula muscular realiza glucólisis anaeróbica, ¿cuál es la principal diferencia en el rendimiento energético y el producto final?",
    "opciones": [
        "La glucólisis anaeróbica produce 2 ATP netos y ácido láctico, mientras que la aeróbica produce 2 ATP netos y ácido pirúvico, que continúa al ciclo de Krebs.",
        "La glucólisis anaeróbica produce 36 ATP y agua, mientras que la aeróbica produce 2 ATP y ácido láctico.",
        "Ambas vías producen 4 ATP netos, pero la anaeróbica utiliza oxígeno molecular.",
        "La glucólisis anaeróbica produce 8 ATP y etanol, mientras que la aeróbica produce 2 ATP y piruvato."
    ],
    "correcta": 0
},
{
    "id": 42,
    "pregunta": "El ciclo de Krebs ocurre en la matriz mitocondrial. ¿Cuál de las siguientes afirmaciones sobre el ciclo de Krebs es INCORRECTA?",
    "opciones": [
        "Por cada vuelta del ciclo se producen 3 NADH, 1 FADH₂ y 1 GTP (equivalente a ATP).",
        "El ciclo de Krebs es una vía anfibólica, ya que sus intermediarios pueden ser utilizados para la síntesis de aminoácidos y otros compuestos.",
        "El ciclo de Krebs comienza con la unión del acetil CoA al oxalacetato, formando citrato.",
        "Por cada molécula de glucosa, se producen 2 vueltas del ciclo de Krebs, generando 2 CO₂ por vuelta."
    ],
    "correcta": 3
},
{
    "id": 43,
    "pregunta": "En la cadena de transporte de electrones, los electrones se transfieren a través de cuatro complejos proteicos hasta el oxígeno molecular. ¿Cuál de las siguientes afirmaciones sobre la fosforilación oxidativa es correcta?",
    "opciones": [
        "El oxígeno actúa como el aceptor final de electrones, reduciéndose a agua, y el gradiente de protones generado en la membrana mitocondrial interna impulsa la síntesis de ATP.",
        "La fosforilación oxidativa ocurre en el citoplasma y produce ATP sin necesidad de oxígeno.",
        "Los electrones son transferidos directamente al ADP para formar ATP, sin necesidad de un gradiente de protones.",
        "El NADH cede electrones al complejo IV, y el FADH₂ al complejo I, generando ambos 3 ATP cada uno."
    ],
    "correcta": 0
},
{
    "id": 44,
    "pregunta": "El rendimiento energético total de la oxidación completa de una molécula de glucosa es de 36 a 38 ATP. ¿Cuál de los siguientes pasos metabólicos contribuye con la mayor cantidad de ATP y por qué?",
    "opciones": [
        "La cadena de transporte de electrones, porque la fosforilación oxidativa produce aproximadamente 32 ATP a partir de los NADH y FADH₂ generados.",
        "El ciclo de Krebs, porque produce 12 ATP directamente por cada vuelta.",
        "La glucólisis, porque produce 4 ATP netos sin necesidad de oxígeno.",
        "La decarboxilación oxidativa del piruvato, porque genera 6 ATP por cada piruvato."
    ],
    "correcta": 0
},
{
    "id": 45,
    "pregunta": "La cadena de transporte de electrones incluye transportadores como los citocromos y la coenzima Q. ¿Cuál es la función de la coenzima Q (ubiquinona) en esta cadena?",
    "opciones": [
        "Es un transportador de electrones no proteico que acepta electrones de los complejos I y II y los transfiere al complejo III.",
        "Es una proteína que contiene hierro y transporta electrones directamente al oxígeno.",
        "Es la enzima que sintetiza ATP a partir de ADP y fosfato inorgánico.",
        "Es un transportador de protones que se mueve entre la matriz y el espacio intermembranoso."
    ],
    "correcta": 0
},
{
    "id": 46,
    "pregunta": "En el estado de absorción, los nutrientes se metabolizan para producir energía o almacenarse. Si una persona consume una comida rica en carbohidratos, ¿cuál es el destino de la glucosa absorbida en el hígado?",
    "opciones": [
        "El 50% se oxida para producir ATP, el 40% se convierte en triglicéridos y el 10% en glucógeno.",
        "El 100% se convierte en glucógeno para almacenarse en el hígado y músculo.",
        "El 60% se convierte en aminoácidos y el 40% en ácidos grasos.",
        "El 30% se almacena como glucógeno, el 60% se oxida y el 10% se excreta por la orina."
    ],
    "correcta": 0
},
{
    "id": 47,
    "pregunta": "El catabolismo de aminoácidos en el hígado implica la desaminación. ¿Cuál es el destino del grupo amino (-NH₂) eliminado y qué compuesto se forma?",
    "opciones": [
        "El grupo amino se convierte en amoníaco (NH₃), que luego se transforma en urea en el ciclo de la urea, para su excreción.",
        "El grupo amino se oxida a nitrato y se elimina por la orina directamente.",
        "El grupo amino se almacena en el hígado como glutamina para su uso posterior.",
        "El grupo amino se une al CO₂ para formar bicarbonato de amonio, que se exhala por los pulmones."
    ],
    "correcta": 0
},
{
    "id": 48,
    "pregunta": "El anabolismo es un proceso endergónico que consume ATP para construir moléculas complejas. ¿Cuál de los siguientes procesos es un ejemplo de anabolismo?",
    "opciones": [
        "La síntesis de proteínas a partir de aminoácidos en el retículo endoplasmático rugoso.",
        "La degradación de glucógeno a glucosa en el hígado (glucogenólisis).",
        "La oxidación de ácidos grasos en la mitocondria para producir Acetil CoA.",
        "La conversión de glucosa a ácido pirúvico en la glucólisis."
    ],
    "correcta": 0
},
{
    "id": 49,
    "pregunta": "La decarboxilación oxidativa del piruvato es un paso clave que conecta la glucólisis con el ciclo de Krebs. ¿Qué compuesto se forma y dónde ocurre esta reacción?",
    "opciones": [
        "Se forma Acetil CoA a partir de piruvato, liberando CO₂ y generando NADH, en la matriz mitocondrial.",
        "Se forma ácido láctico a partir de piruvato, en el citoplasma, generando NAD⁺.",
        "Se forma oxalacetato a partir de piruvato, en el citoplasma, fijando CO₂.",
        "Se forma citrato a partir de piruvato y acetil CoA, en el retículo endoplasmático."
    ],
    "correcta": 0
},
{
    "id": 50,
    "pregunta": "El metabolismo celular está regulado por enzimas y hormonas. ¿Cuál de las siguientes hormonas promueve la glucogenólisis (degradación de glucógeno) durante el estado de post-absorción?",
    "opciones": [
        "El glucagón, que estimula la degradación del glucógeno hepático para liberar glucosa a la sangre.",
        "La insulina, que promueve el almacenamiento de glucosa como glucógeno.",
        "La adrenalina, que inhibe la glucogenólisis para conservar energía.",
        "La hormona del crecimiento, que reduce la gluconeogénesis hepática."
    ],
    "correcta": 0
},
// ==========================================
// ANATOMÍA - EXAMEN 1 (IDs 51-60)
// ==========================================
{
    "id": 51,
    "pregunta": "La clasificación de las articulaciones según su movilidad incluye sinartrosis, anfiartrosis y diartrosis. ¿Cuál de las siguientes articulaciones es un ejemplo de anfiartrosis (semimóvil) y qué tejido la compone?",
    "opciones": [
        "La sínfisis del pubis, que está unida por un disco fibrocartilaginoso y permite movimiento limitado.",
        "La sutura sagital del cráneo, que es una articulación fibrosa inmóvil.",
        "La articulación glenohumeral, que es una diartrosis con amplio movimiento.",
        "La articulación dento-alveolar (gonfosis), que es una articulación fibrosa con movimiento limitado."
    ],
    "correcta": 0
},
{
    "id": 52,
    "pregunta": "Las articulaciones sinoviales tienen componentes específicos que permiten el movimiento. ¿Cuál de los siguientes NO es un componente típico de una articulación sinovial?",
    "opciones": [
        "Cartílago hialino que recubre las superficies articulares.",
        "Membrana sinovial que produce líquido sinovial.",
        "Disco intervertebral de fibrocartílago.",
        "Ligamentos que refuerzan la cápsula articular."
    ],
    "correcta": 2
},
{
    "id": 53,
    "pregunta": "Los meniscos y rodetes (labrum) son estructuras de fibrocartílago en algunas articulaciones sinoviales. ¿Cuál es la función principal de los meniscos en la articulación de la rodilla?",
    "opciones": [
        "Aumentan la superficie de contacto, distribuyen el peso y reducen la fricción entre el fémur y la tibia.",
        "Sintetizan líquido sinovial para lubricar la articulación.",
        "Unen directamente los huesos mediante tejido fibroso denso.",
        "Producen cartílago hialino para reparar el desgaste articular."
    ],
    "correcta": 0
},
{
    "id": 54,
    "pregunta": "El esquince y la luxación son lesiones articulares frecuentes. ¿Cuál es la diferencia fundamental entre ambas?",
    "opciones": [
        "El esquince es la pérdida momentánea del contacto articular, mientras que la luxación es la pérdida permanente.",
        "El esquince afecta solo a los ligamentos, mientras que la luxación afecta solo a la cápsula articular.",
        "El esquince es una inflamación de la membrana sinovial, mientras que la luxación es una fractura ósea.",
        "El esquince es una lesión degenerativa, mientras que la luxación es un proceso inflamatorio agudo."
    ],
    "correcta": 0
},
{
    "id": 55,
    "pregunta": "Los músculos esqueléticos se clasifican según su forma, inserción y función. ¿Cuál de las siguientes afirmaciones sobre la clasificación muscular es correcta?",
    "opciones": [
        "Los músculos bipenniformes tienen fibras que se insertan en ambos lados de un tendón central, como el recto femoral.",
        "Los músculos unipenniformes tienen fibras paralelas al eje del músculo, como el bíceps braquial.",
        "Los músculos multipenniformes tienen fibras que se insertan en un solo tendón, como el gastrocnemio.",
        "Los músculos orbiculares son músculos largos y delgados que se encuentran en las extremidades."
    ],
    "correcta": 0
},
{
    "id": 56,
    "pregunta": "El tejido muscular liso y el cardíaco comparten algunas características, pero se diferencian en otras. ¿Cuál de las siguientes afirmaciones es correcta sobre el tejido muscular cardíaco?",
    "opciones": [
        "Es estriado, involuntario, con discos intercalares que permiten la comunicación entre células.",
        "Es no estriado, voluntario y con un solo núcleo central.",
        "Es estriado, voluntario y con múltiples núcleos periféricos.",
        "Es no estriado, involuntario y sin discos intercalares."
    ],
    "correcta": 0
},
{
    "id": 57,
    "pregunta": "La contracción muscular requiere energía química en forma de ATP. ¿Cuál de los siguientes procesos metabólicos es el más rápido para generar ATP en el músculo esquelético durante una contracción intensa y breve?",
    "opciones": [
        "El sistema de la fosfocreatina, que regenera ATP a partir de ADP usando creatina fosfato.",
        "La glucólisis anaeróbica, que produce ácido láctico y 2 ATP.",
        "La oxidación de ácidos grasos, que produce ATP mediante beta-oxidación.",
        "El ciclo de Krebs, que genera ATP en la matriz mitocondrial."
    ],
    "correcta": 0
},
{
    "id": 58,
    "pregunta": "Los músculos agonistas y antagonistas trabajan en pares para producir movimiento. ¿Cuál de los siguientes ejemplos describe correctamente un par de músculos antagonistas?",
    "opciones": [
        "El bíceps braquial (flexor) y el tríceps braquial (extensor) en el codo.",
        "El cuádriceps (extensor) y el glúteo mayor (flexor) en la cadera.",
        "El deltoides (abductor) y el pectoral mayor (aductor) en el hombro.",
        "El esternocleidomastoideo (flexor) y el trapecio (extensor) en el cuello."
    ],
    "correcta": 0
},
{
    "id": 59,
    "pregunta": "Las bolsas serosas y las aponeurosis son estructuras anexas a los músculos. ¿Cuál es la función principal de las bolsas serosas?",
    "opciones": [
        "Favorecer el deslizamiento de los músculos sobre superficies duras, reduciendo la fricción.",
        "Envolver y contener a los músculos durante la contracción.",
        "Transmitir la fuerza muscular a los huesos a través de los tendones.",
        "Almacenar glucógeno para el metabolismo energético muscular."
    ],
    "correcta": 0
},
{
    "id": 60,
    "pregunta": "El plano anatómico que divide al cuerpo en mitades anterior y posterior, tomando como referencia la sutura craneal coronal, se denomina:",
    "opciones": [
        "Plano frontal o coronal.",
        "Plano sagital.",
        "Plano horizontal.",
        "Plano medio."
    ],
    "correcta": 0
}
];