const preguntas = [
    // ==========================================
    // PREGUNTAS DIFÍCILES DE QUÍMICA (IDs 1-10)
    // ==========================================
    {
        "id": 1,
        "pregunta": "¿Cuál de los siguientes filósofos griegos consideró que el fuego era el elemento primordial que simboliza la constante evolución, y además introdujo la noción del 'devenir' o flujo universal (teoría del fluir universal)?",
        "opciones": [
            "Parménides de Elea",
            "Heráclito de Éfeso",
            "Empédocles de Agrigento",
            "Anaxágoras de Clazomene"
        ],
        "correcta": 1
    },
    {
        "id": 2,
        "pregunta": "Según la teoría atómica de Dalton, ¿cuál de los siguientes postulados fue posteriormente refutado por el descubrimiento de los isótopos?",
        "opciones": [
            "Todos los átomos de un mismo elemento son idénticos en masa y propiedades",
            "Los compuestos están formados por átomos de más de un elemento",
            "Las reacciones químicas implican solo separación, combinación o reordenamiento de átomos",
            "Los átomos son indivisibles"
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "¿Qué propiedad de los compuestos iónicos explica que el NaCl fundido conduzca la electricidad, pero el NaCl sólido no?",
        "opciones": [
            "En estado líquido los iones se mueven libremente; en estado sólido están fijos en la red cristalina",
            "En estado sólido los electrones están localizados en enlaces covalentes",
            "En estado líquido se rompen los enlaces iónicos y se forman enlaces metálicos",
            "El NaCl sólido tiene electrones libres que no pueden moverse"
        ],
        "correcta": 0
    },
    {
        "id": 4,
        "pregunta": "¿Cuál de las siguientes sustancias es una excepción a la regla del octeto, y cuál es la razón?",
        "opciones": [
            "BF3, porque el boro solo tiene 6 electrones en su capa de valencia (no cumple el octeto)",
            "BeCl2, porque el berilio tiene 8 electrones en su capa de valencia",
            "PCl5, porque el fósforo tiene 10 electrones en su capa de valencia",
            "SF6, porque el azufre tiene 12 electrones en su capa de valencia"
        ],
        "correcta": 0
    },
    {
        "id": 5,
        "pregunta": "¿Cómo influye el efecto del par inerte en la química de los elementos del grupo 13 (boro, aluminio, galio, indio, talio)?",
        "opciones": [
            "El talio tiende a formar compuestos con estado de oxidación +1 en lugar de +3 debido a la baja energía de ionización del par 6s2",
            "El boro siempre forma compuestos con estado de oxidación +3",
            "El aluminio no forma compuestos covalentes",
            "Todos los elementos del grupo 13 forman compuestos iónicos"
        ],
        "correcta": 0
    },
    {
        "id": 6,
        "pregunta": "¿Qué relación existe entre la longitud de enlace y la energía de enlace según la teoría de los enlaces covalentes?",
        "opciones": [
            "A menor longitud de enlace, mayor energía de enlace (el enlace es más fuerte)",
            "A mayor longitud de enlace, mayor energía de enlace",
            "La longitud de enlace no afecta la energía de enlace",
            "La energía de enlace es inversamente proporcional a la electronegatividad"
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "Según la teoría de la resonancia en el dióxido de carbono (CO2), ¿cómo se representan las estructuras resonantes para explicar la longitud de enlace intermedia entre enlace simple y doble?",
        "opciones": [
            "El CO2 tiene dos estructuras resonantes equivalentes con enlaces dobles C=O, lo que da una longitud de enlace promedio",
            "El CO2 tiene un enlace simple y uno triple",
            "El CO2 tiene una estructura resonante con un enlace doble y otro simple",
            "El CO2 no presenta resonancia porque el carbono es tetravalente"
        ],
        "correcta": 0
    },
    {
        "id": 8,
        "pregunta": "¿Cómo se explica la formación de la capa de electrones en los metales según la teoría de bandas, y qué implica la existencia de una banda de conducción?",
        "opciones": [
            "Los electrones de valencia ocupan una banda continua de energía; la banda de conducción permite el movimiento de electrones y la conductividad eléctrica",
            "Los electrones están localizados en orbitales atómicos discretos",
            "La banda de conducción solo existe en semiconductores",
            "Los metales no tienen banda de conducción, solo banda de valencia"
        ],
        "correcta": 0
    },
    {
        "id": 9,
        "pregunta": "¿Cuál de las siguientes interacciones intermoleculares es responsable de la estructura secundaria de las proteínas (hélices alfa y láminas beta)?",
        "opciones": [
            "Puentes de hidrógeno entre los grupos N-H y C=O de la cadena peptídica",
            "Interacciones hidrofóbicas entre cadenas laterales apolares",
            "Puentes disulfuro entre cisteínas",
            "Interacciones iónicas entre aminoácidos con carga"
        ],
        "correcta": 0
    },
    {
        "id": 10,
        "pregunta": "¿Cómo afecta la polaridad de un disolvente a la solubilidad de un compuesto iónico, según la regla 'lo similar disuelve lo similar'?",
        "opciones": [
            "Los compuestos iónicos se disuelven en disolventes polares (como el agua) porque los dipolos del disolvente interactúan con los iones",
            "Los compuestos iónicos se disuelven en disolventes no polares porque los iones son apolares",
            "La polaridad no afecta la solubilidad de los compuestos iónicos",
            "Los compuestos iónicos solo se disuelven en disolventes orgánicos"
        ],
        "correcta": 0
    },
    // ==========================================
// LENGUAJE - EXAMEN 5 (IDs 11-20)
// ==========================================
{
    "id": 11,
    "pregunta": "¿Cuál de las siguientes palabras es SOBRESDRÚJULA y lleva tilde?",
    "opciones": [
        "Árbol",
        "Cántaselo",
        "Teléfono",
        "Examen"
    ],
    "correcta": 1
},
{
    "id": 12,
    "pregunta": "En la oración 'Él es mi profesor', la palabra 'él' lleva tilde porque es:",
    "opciones": [
        "Artículo",
        "Pronombre personal",
        "Adjetivo posesivo",
        "Conjunción"
    ],
    "correcta": 1
},
{
    "id": 13,
    "pregunta": "¿Cuál de las siguientes palabras NO debe llevar tilde?",
    "opciones": [
        "Héroe",
        "Víctima",
        "Huir",
        "Sábado"
    ],
    "correcta": 2
},
{
    "id": 14,
    "pregunta": "¿Cuál de las siguientes oraciones utiliza correctamente el PUNTO Y COMA?",
    "opciones": [
        "Llegué tarde; no encontré a nadie",
        "Llegué tarde no encontré, a nadie",
        "Llegué, tarde no encontré a nadie",
        "Llegué tarde no, encontré a nadie"
    ],
    "correcta": 0
},
{
    "id": 15,
    "pregunta": "Los PARÉNTESIS se utilizan para:",
    "opciones": [
        "Cerrar una cita textual",
        "Agregar información aclaratoria",
        "Indicar una pausa breve",
        "Separar elementos de una enumeración"
    ],
    "correcta": 1
},
{
    "id": 16,
    "pregunta": "¿Cuál de las siguientes palabras se escribe correctamente con 'z'?",
    "opciones": [
        "Bolsa",
        "Dulce",
        "Lapiz",
        "Pez"
    ],
    "correcta": 3
},
{
    "id": 17,
    "pregunta": "¿Cuál de las siguientes palabras se escribe con 'g'?",
    "opciones": [
        "Cojer",
        "Coger",
        "Cojer",
        "Coger"
    ],
    "correcta": 1
},
{
    "id": 18,
    "pregunta": "Las palabras que comienzan con el prefijo 'hemi-' (mitad) se escriben con:",
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
    "pregunta": "El prefijo 'peri-' en el término 'pericardio' significa:",
    "opciones": [
        "Dentro de",
        "Alrededor de",
        "Fuera de",
        "Debajo de"
    ],
    "correcta": 1
},
{
    "id": 20,
    "pregunta": "El sufijo '-scopia' en el término 'endoscopia' indica:",
    "opciones": [
        "Extirpación",
        "Visualización",
        "Inflamación",
        "Dolor"
    ],
    "correcta": 1
},
// ==========================================
// FÍSICA - EXAMEN 4 (IDs 21-30)
// ==========================================
{
    "id": 21,
    "pregunta": "Un automóvil de 1000 kg viaja a 72 km/h y frena hasta detenerse en 50 m. ¿Cuál es la fuerza de frenado promedio?",
    "opciones": [
        "F = 4000 N",
        "F = 2000 N",
        "F = 8000 N",
        "F = 6000 N"
    ],
    "correcta": 0
},
{
    "id": 22,
    "pregunta": "Un vector A tiene componentes A_x = 12 y A_y = 5. ¿Cuál es su módulo y el ángulo que forma con el eje x?",
    "opciones": [
        "|A| = 13, θ = 22.62°",
        "|A| = 17, θ = 22.62°",
        "|A| = 13, θ = 67.38°",
        "|A| = 17, θ = 67.38°"
    ],
    "correcta": 0
},
{
    "id": 23,
    "pregunta": "Un bloque de 20 kg es empujado por una fuerza de 150 N sobre una superficie horizontal con coeficiente de fricción cinética 0.2. Calcule la aceleración. (g = 9.8 m/s²)",
    "opciones": [
        "a = 5.54 m/s²",
        "a = 3.72 m/s²",
        "a = 7.50 m/s²",
        "a = 2.85 m/s²"
    ],
    "correcta": 0
},
{
    "id": 24,
    "pregunta": "Se lanza una pelota horizontalmente desde una altura de 20 m con velocidad de 15 m/s. ¿Cuál es el alcance horizontal? (g = 9.8 m/s²)",
    "opciones": [
        "R = 30.3 m",
        "R = 22.5 m",
        "R = 45.6 m",
        "R = 15.2 m"
    ],
    "correcta": 0
},
{
    "id": 25,
    "pregunta": "Un cuerpo de 2 kg gira en un círculo de radio 0.5 m con frecuencia de 2 Hz. ¿Cuál es la fuerza centrípeta?",
    "opciones": [
        "F_c = 157.9 N",
        "F_c = 39.5 N",
        "F_c = 78.9 N",
        "F_c = 19.7 N"
    ],
    "correcta": 0
},
{
    "id": 26,
    "pregunta": "Un motor realiza un trabajo de 5000 J en 10 s. ¿Cuál es su potencia?",
    "opciones": [
        "P = 500 W",
        "P = 50 W",
        "P = 5000 W",
        "P = 50000 W"
    ],
    "correcta": 0
},
{
    "id": 27,
    "pregunta": "Un bloque de 10 kg se desliza por un plano inclinado de 30° con coeficiente de fricción cinética 0.15. Determine la aceleración. (g = 9.8 m/s²)",
    "opciones": [
        "a = 3.63 m/s²",
        "a = 4.90 m/s²",
        "a = 2.45 m/s²",
        "a = 5.78 m/s²"
    ],
    "correcta": 0
},
{
    "id": 28,
    "pregunta": "Un cuerpo se lanza verticalmente hacia arriba con velocidad de 20 m/s. ¿Cuál es la altura máxima y el tiempo total de vuelo? (g = 9.8 m/s²)",
    "opciones": [
        "h_max = 20.41 m, t_total = 4.08 s",
        "h_max = 10.20 m, t_total = 2.04 s",
        "h_max = 40.82 m, t_total = 8.16 s",
        "h_max = 30.61 m, t_total = 6.12 s"
    ],
    "correcta": 0
},
{
    "id": 29,
    "pregunta": "Dos cuerpos de masas 3 kg y 5 kg están separados 1.5 m. ¿Cuál es la fuerza gravitacional entre ellos? (G = 6.67×10⁻¹¹ N·m²/kg²)",
    "opciones": [
        "F = 4.45×10⁻¹⁰ N",
        "F = 2.96×10⁻¹⁰ N",
        "F = 5.93×10⁻¹⁰ N",
        "F = 1.48×10⁻¹⁰ N"
    ],
    "correcta": 0
},
{
    "id": 30,
    "pregunta": "Un cuerpo de 3 kg se mueve con velocidad de 10 m/s y choca elásticamente con otro de 2 kg en reposo. ¿Cuáles son las velocidades después del choque?",
    "opciones": [
        "v₁ = 2 m/s, v₂ = 12 m/s",
        "v₁ = 4 m/s, v₂ = 9 m/s",
        "v₁ = 6 m/s, v₂ = 6 m/s",
        "v₁ = 8 m/s, v₂ = 3 m/s"
    ],
    "correcta": 0
},
// ==========================================
// MATEMÁTICAS - EXAMEN 2 (IDs 31-40)
// ==========================================
{
    "id": 31,
    "pregunta": "Simplifique: [x^(a+b)]^(a-b) · [x^(b+c)]^(b-c) · [x^(c+a)]^(c-a). ¿Cuál es el exponente final de x?",
    "opciones": [
        "El exponente es 0",
        "El exponente es 1",
        "El exponente es 2",
        "El exponente es -1"
    ],
    "correcta": 0
},
{
    "id": 32,
    "pregunta": "Calcule: √[3]{54x⁷y⁸} / √[3]{2xy²}. ¿Cuál es el resultado simplificado?",
    "opciones": [
        "3x²y²√[3]{x}",
        "3xy²√[3]{x²}",
        "3x²y√[3]{y}",
        "3x²y²"
    ],
    "correcta": 0
},
{
    "id": 33,
    "pregunta": "Sean los conjuntos A = {x ∈ Z / x² - 4x + 3 = 0} y B = {x ∈ Z / x es par y x < 10}. Determine A ∩ B.",
    "opciones": [
        "{1, 3}",
        "{2, 4}",
        "{1, 2, 3, 4}",
        "∅"
    ],
    "correcta": 3
},
{
    "id": 34,
    "pregunta": "Evalúe la fórmula lógica: [(p → q) ∧ (q → r)] → (p → r). ¿Qué tipo de fórmula es?",
    "opciones": [
        "Tautología",
        "Contradicción",
        "Contingencia",
        "Implicación"
    ],
    "correcta": 0
},
{
    "id": 35,
    "pregunta": "Dados los polinomios P(x) = 2x³ - 5x² + 3x - 1 y Q(x) = x³ + 4x² - 2x + 7, calcule P(x) - Q(x).",
    "opciones": [
        "x³ - 9x² + 5x - 8",
        "x³ - x² + x - 8",
        "3x³ - x² + x + 6",
        "x³ + 9x² + 5x - 8"
    ],
    "correcta": 0
},
{
    "id": 36,
    "pregunta": "Multiplique: (x² - 3x + 2)(2x² + x - 3). ¿Cuál es el resultado?",
    "opciones": [
        "2x⁴ - 5x³ - 2x² + 11x - 6",
        "2x⁴ - 5x³ + 2x² + 11x - 6",
        "2x⁴ - 5x³ - 2x² - 11x - 6",
        "2x⁴ + 5x³ - 2x² + 11x - 6"
    ],
    "correcta": 0
},
{
    "id": 37,
    "pregunta": "Simplifique: (x^(2n+1) · x^(3n-2) · x^(n+3)) / (x^(4n-1) · x^(2n+2)). ¿Cuál es el exponente final de x?",
    "opciones": [
        "2n + 1",
        "n - 1",
        "3n - 2",
        "n + 3"
    ],
    "correcta": 0
},
{
    "id": 38,
    "pregunta": "Calcule el residuo de la división: (x³ - 7x² - 41x - 33) ÷ (x - 11).",
    "opciones": [
        "R(x) = 0",
        "R(x) = 6",
        "R(x) = -6",
        "R(x) = 11"
    ],
    "correcta": 0
},
{
    "id": 39,
    "pregunta": "Racionalice: 5 / (√[3]{2}). Exprese en su forma más simplificada.",
    "opciones": [
        "(5√[3]{4}) / 2",
        "(5√[3]{2}) / 2",
        "5√[3]{4}",
        "(5√[3]{8}) / 2"
    ],
    "correcta": 0
},
{
    "id": 40,
    "pregunta": "Dado que A = {1, 2, 3, 4, 5, 6} y B = {2, 4, 6, 8, 10}, determine |A ∪ B|.",
    "opciones": [
        "8",
        "9",
        "10",
        "6"
    ],
    "correcta": 0
},
// ==========================================
// BIOLOGÍA - EXAMEN 2 (IDs 41-50)
// ==========================================
{
    "id": 41,
    "pregunta": "La teoría celular establece que todos los organismos están compuestos por células. ¿Quiénes fueron los científicos que sentaron las bases de esta teoría entre 1838 y 1839?",
    "opciones": [
        "Matthias Schleiden y Theodor Schwann",
        "Robert Hooke y Antonie van Leeuwenhoek",
        "Rudolph Virchow y August Weismann",
        "Robert Brown y Purkinje"
    ],
    "correcta": 0
},
{
    "id": 42,
    "pregunta": "Las células procariotas se diferencian de las eucariotas en varias características estructurales. ¿Cuál de las siguientes afirmaciones describe correctamente una diferencia clave?",
    "opciones": [
        "Las procariotas carecen de membrana nuclear y organelos membranosos, mientras que las eucariotas poseen núcleo definido y organelos como mitocondrias y retículo endoplasmático.",
        "Las procariotas tienen múltiples cromosomas lineales, mientras que las eucariotas tienen un solo cromosoma circular.",
        "Las procariotas poseen ribosomas 80S en el citoplasma, mientras que las eucariotas tienen ribosomas 70S en el retículo endoplasmático.",
        "Las procariotas presentan citoesqueleto compuesto por filamentos proteicos, mientras que las eucariotas carecen de citoesqueleto."
    ],
    "correcta": 0
},
{
    "id": 43,
    "pregunta": "La membrana plasmática está compuesta por una bicapa lipídica con proteínas insertadas. Según el modelo del mosaico fluido propuesto por Singer y Nicolson en 1972, ¿cuál de las siguientes afirmaciones es correcta?",
    "opciones": [
        "Los fosfolípidos forman una bicapa con cabezas hidrofílicas hacia el exterior y colas hidrofóbicas hacia el interior, y las proteínas se mueven lateralmente dentro de la membrana.",
        "Las proteínas están fijas en la membrana y no pueden moverse, mientras que los lípidos son estáticos.",
        "La membrana es una estructura rígida donde los lípidos y proteínas no tienen movilidad.",
        "Los carbohidratos se encuentran únicamente en la cara interna de la membrana celular."
    ],
    "correcta": 0
},
{
    "id": 44,
    "pregunta": "El transporte activo primario utiliza ATP para mover solutos contra su gradiente de concentración. ¿Cuál de los siguientes es un ejemplo de transporte activo primario?",
    "opciones": [
        "La bomba de sodio-potasio (Na⁺/K⁺ ATPasa), que extrae 3 Na⁺ e introduce 2 K⁺ por cada ATP hidrolizado.",
        "El simporte de glucosa y sodio a través de la membrana intestinal.",
        "La difusión facilitada de glucosa mediante el transportador GLUT.",
        "El intercambio de cloro y bicarbonato en los eritrocitos."
    ],
    "correcta": 0
},
{
    "id": 45,
    "pregunta": "Los lisosomas son organelos que contienen enzimas digestivas. ¿Cuál de las siguientes afirmaciones sobre los lisosomas es correcta?",
    "opciones": [
        "Las enzimas lisosómicas se fabrican en el retículo endoplasmático rugoso y se procesan en el aparato de Golgi, formando lisosomas primarios.",
        "Los lisosomas se forman directamente en el núcleo celular y migran al citoplasma.",
        "Los lisosomas no tienen membrana y liberan sus enzimas directamente al citosol.",
        "Los lisosomas solo se encuentran en células vegetales, no en animales."
    ],
    "correcta": 0
},
{
    "id": 46,
    "pregunta": "La mitocondria es el organelo encargado de la producción de ATP mediante la respiración celular. ¿Cuál de las siguientes afirmaciones sobre la estructura mitocondrial es INCORRECTA?",
    "opciones": [
        "La membrana externa es altamente permeable debido a la presencia de porinas.",
        "La membrana interna tiene pliegues llamados crestas que aumentan su superficie.",
        "La matriz mitocondrial contiene ADN circular, ribosomas y enzimas del ciclo de Krebs.",
        "El espacio intermembranoso tiene un pH más alcalino que la matriz mitocondrial."
    ],
    "correcta": 3
},
{
    "id": 47,
    "pregunta": "El retículo endoplasmático rugoso (RER) y el liso (REL) tienen funciones diferentes. ¿Cuál de las siguientes funciones corresponde al REL?",
    "opciones": [
        "La síntesis de lípidos, incluyendo fosfolípidos y colesterol.",
        "La síntesis de proteínas destinadas a la secreción.",
        "La glicosilación de proteínas recién sintetizadas.",
        "El plegamiento de proteínas mediante chaperonas."
    ],
    "correcta": 0
},
{
    "id": 48,
    "pregunta": "El aparato de Golgi modifica, clasifica y empaqueta proteínas y lípidos. ¿Cuál de las siguientes afirmaciones describe correctamente una función del aparato de Golgi?",
    "opciones": [
        "Modifica macromoléculas mediante glicosilación y fosforilación, y forma lisosomas primarios.",
        "Sintetiza proteínas a partir de aminoácidos utilizando ribosomas adheridos.",
        "Produce ATP mediante la fosforilación oxidativa.",
        "Degrada peroxisomas y recicla sus componentes."
    ],
    "correcta": 0
},
{
    "id": 49,
    "pregunta": "Los centriolos son estructuras cilíndricas que participan en la división celular. ¿Cuál es la organización estructural de un centriolo?",
    "opciones": [
        "Nueve tripletes de microtúbulos dispuestos en círculo (estructura 9+0).",
        "Nueve dobletes de microtúbulos con dos microtúbulos centrales (estructura 9+2).",
        "Trece protofilamentos en cada microtúbulo, sin organización definida.",
        "Nueve microtúbulos simples con una estructura central de actina."
    ],
    "correcta": 0
},
{
    "id": 50,
    "pregunta": "Las vacuolas en las células vegetales son grandes y tienen múltiples funciones. ¿Cuál de las siguientes NO es una función de la vacuola vegetal?",
    "opciones": [
        "Almacenar sales minerales, azúcares y aminoácidos.",
        "Proporcionar turgencia a la célula mediante la presión osmótica.",
        "Digestión de organelos dañados (autofagia).",
        "Contener pigmentos como antocianinas que dan color a las flores."
    ],
    "correcta": 2
},
// ==========================================
// ANATOMÍA - EXAMEN 2 (IDs 51-60)
// ==========================================
{
    "id": 51,
    "pregunta": "La osteología estudia los huesos, que son tejidos conectivos especializados. ¿Cuál de los siguientes componentes corresponde al componente orgánico del hueso?",
    "opciones": [
        "Colágeno tipo I y células como osteoblastos, osteocitos y osteoclastos.",
        "Hidroxiapatita (fosfato de calcio y carbonato de calcio).",
        "Magnesio, flúor y sodio en forma iónica.",
        "Fosfato de calcio cristalizado alrededor de las fibras de colágeno."
    ],
    "correcta": 0
},
{
    "id": 52,
    "pregunta": "Los osteoclastos son células responsables de la resorción ósea. ¿Cuál de las siguientes afirmaciones sobre los osteoclastos es correcta?",
    "opciones": [
        "Son células grandes multinucleadas que resultan de la fusión de aproximadamente 50 monocitos.",
        "Son células que sintetizan colágeno y sustancia fundamental (osteoide).",
        "Son osteoblastos maduros atrapados dentro de la matriz ósea.",
        "Son células precursoras de los osteoblastos y osteocitos."
    ],
    "correcta": 0
},
{
    "id": 53,
    "pregunta": "El tejido óseo compacto está organizado en unidades estructurales llamadas osteonas o sistemas de Havers. ¿Cuál de los siguientes elementos NO forma parte de una osteona?",
    "opciones": [
        "Laminillas concéntricas alrededor de un conducto central.",
        "Lagunas óseas con osteocitos.",
        "Trabéculas óseas que forman una malla tridimensional.",
        "Canalículos que irradian desde las lagunas."
    ],
    "correcta": 2
},
{
    "id": 54,
    "pregunta": "Los huesos se clasifican en largos, cortos, planos, irregulares, neumáticos y sesamoideos. ¿Cuál de los siguientes huesos es un ejemplo de hueso sesamoideo?",
    "opciones": [
        "La rótula (patela).",
        "El esternón.",
        "El hioides.",
        "El etmoides."
    ],
    "correcta": 0
},
{
    "id": 55,
    "pregunta": "En la superficie ósea, las cavidades y eminencias se clasifican en articulares y no articulares. ¿Cuál de los siguientes es un ejemplo de cavidad no articular?",
    "opciones": [
        "Fosa, antro, agujero y canal.",
        "Cóndilo y tubérculo.",
        "Apófisis y cresta.",
        "Espina y eminencia."
    ],
    "correcta": 0
},
{
    "id": 56,
    "pregunta": "El esqueleto humano se divide en esqueleto axial y apendicular. ¿Cuántos huesos conforman el esqueleto axial en un adulto?",
    "opciones": [
        "80 huesos.",
        "126 huesos.",
        "206 huesos.",
        "33 huesos."
    ],
    "correcta": 0
},
{
    "id": 57,
    "pregunta": "Las suturas son articulaciones fibrosas que se encuentran en el cráneo. ¿Cuál de las siguientes suturas corresponde a la unión entre el hueso parietal y la escama del temporal?",
    "opciones": [
        "Sutura escamosa.",
        "Sutura dentada.",
        "Sutura armónica.",
        "Sutura esquindelesis."
    ],
    "correcta": 0
},
{
    "id": 58,
    "pregunta": "La articulación dento-alveolar, que une el diente al alvéolo, es un ejemplo de:",
    "opciones": [
        "Gonfosis, una articulación fibrosa.",
        "Sindesmosis, una articulación fibrosa con mayor distancia entre superficies.",
        "Sincondrosis, una articulación cartilaginosa con cartílago hialino.",
        "Sinfisis, una articulación cartilaginosa con disco fibrocartilaginoso."
    ],
    "correcta": 0
},
{
    "id": 59,
    "pregunta": "Las articulaciones sinoviales se clasifican según la forma de sus superficies articulares. ¿Qué tipo de articulación es la articulación glenohumeral (hombro)?",
    "opciones": [
        "Articulación en esfera (eantrosis o cotílica), multiaxial.",
        "Articulación en bisagra (troclear), monoaxial.",
        "Articulación en pivote (trocoide), monoaxial.",
        "Articulación en silla de montar (encaje recíproco), biaxial."
    ],
    "correcta": 0
},
{
    "id": 60,
    "pregunta": "El término anatómico que describe una estructura que se encuentra lejos del punto de origen de un miembro se denomina:",
    "opciones": [
        "Distal.",
        "Proximal.",
        "Medial.",
        "Lateral."
    ],
    "correcta": 0
}
];