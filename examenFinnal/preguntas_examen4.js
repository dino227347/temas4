const preguntas = [
    // ==========================================
    // PREGUNTAS DIFÍCILES DE QUÍMICA (IDs 1-10)
    // ==========================================
    {
        "id": 1,
        "pregunta": "¿Cuál de los siguientes postulados de la teoría del flogisto fue refutado por Lavoisier mediante sus experimentos de combustión?",
        "opciones": [
            "El flogisto era un principio que se desprendía durante la combustión y que no tenía masa",
            "La combustión era el resultado de la adición de flogisto a una sustancia",
            "El flogisto era un elemento pesado y denso",
            "El flogisto era el responsable de la acidez de las sustancias"
        ],
        "correcta": 0
    },
    {
        "id": 2,
        "pregunta": "¿Qué aporte realizó Andreas Libavius a la química en el siglo XVI, y cómo influyó en la enseñanza de esta ciencia?",
        "opciones": [
            "Escribió el primer libro de texto de química 'Alchemia' y diseñó el primer laboratorio químico",
            "Descubrió el oxígeno y la composición del aire",
            "Propuso la teoría del flogisto y la aplicó a la medicina",
            "Fue el primero en sintetizar ácido sulfúrico"
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "¿Cómo contribuyó el experimento de Rutherford con partículas alfa a refutar el modelo atómico de Thomson?",
        "opciones": [
            "Demostró que la mayor parte del átomo es espacio vacío y que la masa positiva está concentrada en un núcleo diminuto, lo cual era incompatible con el modelo de Thomson de carga positiva distribuida uniformemente",
            "Demostró que los electrones están en órbitas circulares",
            "Confirmó que el átomo es indivisible",
            "Demostró que los electrones tienen carga negativa"
        ],
        "correcta": 0
    },
    {
        "id": 4,
        "pregunta": "Según la teoría de la hibridación de orbitales, ¿cuántos orbitales híbridos sp3 se forman en el carbono del metano (CH4) y qué geometría molecular se predice?",
        "opciones": [
            "Se forman 4 orbitales híbridos sp3 con geometría tetraédrica y ángulos de 109.5°",
            "Se forman 3 orbitales híbridos sp2 con geometría trigonal plana",
            "Se forman 2 orbitales híbridos sp con geometría lineal",
            "Se forman 4 orbitales híbridos sp3d con geometría bipiramidal"
        ],
        "correcta": 0
    },
    {
        "id": 5,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la escala de electronegatividad de Pauling es correcta?",
        "opciones": [
            "La electronegatividad aumenta al moverse de izquierda a derecha en un período y disminuye al bajar en un grupo",
            "La electronegatividad disminuye al moverse de izquierda a derecha en un período y aumenta al bajar en un grupo",
            "La electronegatividad es directamente proporcional al radio atómico",
            "La electronegatividad es inversamente proporcional a la energía de ionización"
        ],
        "correcta": 0
    },
    {
        "id": 6,
        "pregunta": "¿Cómo se explica que el vapor de agua (H2O) sea un gas a temperatura ambiente, mientras que el H2S (sulfuro de hidrógeno), que tiene una masa molecular similar, también es un gas pero con un punto de ebullición mucho más bajo?",
        "opciones": [
            "El agua forma puentes de hidrógeno intermoleculares más fuertes que las fuerzas de van der Waals del H2S",
            "El agua es más polar que el H2S",
            "El H2S tiene enlaces covalentes más fuertes",
            "El agua tiene mayor masa molar que el H2S"
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "¿Cuál de los siguientes compuestos presenta un enlace covalente polar, pero la molécula en su conjunto es apolar debido a su geometría simétrica?",
        "opciones": [
            "CO2 (dióxido de carbono, geometría lineal)",
            "H2O (agua, geometría angular)",
            "NH3 (amoniaco, geometría piramidal)",
            "HCl (cloruro de hidrógeno, geometría lineal)"
        ],
        "correcta": 0
    },
    {
        "id": 8,
        "pregunta": "¿Qué cantidad de electrones de valencia tiene el fósforo en el PCl5, y cómo se explica su capacidad de expandir el octeto?",
        "opciones": [
            "Tiene 10 electrones de valencia (5 pares) porque utiliza orbitales d vacíos para formar 5 enlaces covalentes, superando la regla del octeto",
            "Tiene 8 electrones de valencia, cumpliendo con la regla del octeto",
            "Tiene 6 electrones de valencia y forma enlaces iónicos",
            "Tiene 12 electrones de valencia porque utiliza orbitales f"
        ],
        "correcta": 0
    },
    {
        "id": 9,
        "pregunta": "Según el principio de exclusión de Pauli, ¿cuántos electrones puede albergar como máximo el subnivel 3d y por qué?",
        "opciones": [
            "10 electrones (5 orbitales × 2 electrones cada uno)",
            "6 electrones (3 orbitales × 2 electrones)",
            "14 electrones (7 orbitales × 2 electrones)",
            "2 electrones (1 orbital × 2 electrones)"
        ],
        "correcta": 0
    },
    {
        "id": 10,
        "pregunta": "¿Cómo se relaciona la temperatura con la energía cinética de las partículas en un gas según la teoría cinético-molecular, y cómo afecta esto a la presión del gas?",
        "opciones": [
            "La temperatura es directamente proporcional a la energía cinética promedio; al aumentar la temperatura, las partículas chocan con mayor frecuencia y fuerza contra las paredes, aumentando la presión",
            "La temperatura es inversamente proporcional a la energía cinética; al aumentar la temperatura, la presión disminuye",
            "La presión no depende de la temperatura, solo del volumen",
            "La temperatura afecta solo la energía potencial de las partículas"
        ],
        "correcta": 0
    },
    // ==========================================
// LENGUAJE - EXAMEN 4 (IDs 11-20)
// ==========================================
{
    "id": 11,
    "pregunta": "¿Cuál de las siguientes palabras DEBE llevar tilde por ser GRAVE terminada en consonante que no es 'n' ni 's'?",
    "opciones": [
        "Carcel",
        "Examen",
        "Mes",
        "Césped"
    ],
    "correcta": 3
},
{
    "id": 12,
    "pregunta": "En la oración 'Dame mi libro', la palabra 'mi' NO lleva tilde porque es:",
    "opciones": [
        "Pronombre personal",
        "Adjetivo posesivo",
        "Verbo",
        "Conjunción"
    ],
    "correcta": 1
},
{
    "id": 13,
    "pregunta": "La palabra 'veintiún' lleva tilde en la última sílaba cuando:",
    "opciones": [
        "Siempre lleva tilde",
        "Nunca lleva tilde",
        "Va seguida de un sustantivo",
        "Va sola"
    ],
    "correcta": 2
},
{
    "id": 14,
    "pregunta": "¿Cuál de las siguientes oraciones utiliza correctamente la COMA ENUMERATIVA?",
    "opciones": [
        "Compré manzanas peras y uvas",
        "Compré manzanas, peras, y uvas",
        "Compré manzanas, peras y uvas",
        "Compré, manzanas peras y uvas"
    ],
    "correcta": 2
},
{
    "id": 15,
    "pregunta": "Los PUNTOS SUSPENSIVOS se utilizan para indicar una pausa que expresa:",
    "opciones": [
        "Certeza absoluta",
        "Duda o temor",
        "Seguridad",
        "Afirmación rotunda"
    ],
    "correcta": 1
},
{
    "id": 16,
    "pregunta": "Las palabras que terminan en '-ción' se escriben con:",
    "opciones": [
        "S",
        "C",
        "Z",
        "X"
    ],
    "correcta": 1
},
{
    "id": 17,
    "pregunta": "¿Cuál de las siguientes palabras se escribe con 'b'?",
    "opciones": [
        "Cavallo",
        "Caballo",
        "Cavallo",
        "Cavallo"
    ],
    "correcta": 1
},
{
    "id": 18,
    "pregunta": "Las palabras que empiezan con el prefijo 'hiper-' (exceso) se escriben con:",
    "opciones": [
        "G",
        "J",
        "H",
        "Sin h"
    ],
    "correcta": 2
},
{
    "id": 19,
    "pregunta": "El prefijo 'leuco-' en el término 'leucocito' significa:",
    "opciones": [
        "Rojo",
        "Blanco",
        "Negro",
        "Amarillo"
    ],
    "correcta": 1
},
{
    "id": 20,
    "pregunta": "El sufijo '-itis' en el término 'hepatitis' indica:",
    "opciones": [
        "Dolor",
        "Inflamación",
        "Tumor",
        "Extirpación"
    ],
    "correcta": 1
},
// ==========================================
// FÍSICA - EXAMEN 5 (IDs 21-30)
// ==========================================
{
    "id": 21,
    "pregunta": "Un cuerpo de 6 kg se mueve a 12 m/s. ¿Qué fuerza constante se necesita para detenerlo en 8 m?",
    "opciones": [
        "F = 54 N",
        "F = 27 N",
        "F = 108 N",
        "F = 36 N"
    ],
    "correcta": 0
},
{
    "id": 22,
    "pregunta": "Dos vectores de módulos 8 y 15 unidades forman un ángulo de 90°. ¿Cuál es el módulo de la resultante y su dirección?",
    "opciones": [
        "R = 17, θ = 61.93° (respecto al vector de 8)",
        "R = 23, θ = 61.93°",
        "R = 17, θ = 28.07°",
        "R = 23, θ = 28.07°"
    ],
    "correcta": 0
},
{
    "id": 23,
    "pregunta": "Un bloque de 25 kg se encuentra en un plano inclinado de 25° con coeficiente de fricción cinética 0.3. Calcule la aceleración si se suelta desde el reposo. (g = 9.8 m/s²)",
    "opciones": [
        "a = 1.48 m/s²",
        "a = 3.12 m/s²",
        "a = 4.14 m/s²",
        "a = 2.34 m/s²"
    ],
    "correcta": 0
},
{
    "id": 24,
    "pregunta": "Un proyectil es lanzado con velocidad de 50 m/s y ángulo de 60°. ¿Cuál es la altura máxima alcanzada? (g = 9.8 m/s²)",
    "opciones": [
        "h_max = 95.7 m",
        "h_max = 63.8 m",
        "h_max = 127.6 m",
        "h_max = 47.8 m"
    ],
    "correcta": 0
},
{
    "id": 25,
    "pregunta": "Un cuerpo de 1.5 kg gira en un círculo de radio 1.8 m con velocidad de 6 m/s. ¿Cuál es la fuerza centrípeta?",
    "opciones": [
        "F_c = 30 N",
        "F_c = 15 N",
        "F_c = 45 N",
        "F_c = 60 N"
    ],
    "correcta": 0
},
{
    "id": 26,
    "pregunta": "Un ascensor de 500 kg sube con aceleración de 1.5 m/s². ¿Cuál es la tensión en el cable? (g = 9.8 m/s²)",
    "opciones": [
        "T = 5650 N",
        "T = 4900 N",
        "T = 4150 N",
        "T = 7350 N"
    ],
    "correcta": 0
},
{
    "id": 27,
    "pregunta": "Un bloque de 8 kg se desliza sobre una superficie horizontal con coeficiente de fricción cinética 0.4. Si tiene velocidad inicial de 15 m/s, ¿qué distancia recorre hasta detenerse? (g = 9.8 m/s²)",
    "opciones": [
        "d = 28.7 m",
        "d = 14.3 m",
        "d = 57.4 m",
        "d = 21.5 m"
    ],
    "correcta": 0
},
{
    "id": 28,
    "pregunta": "Un péndulo de 1.8 m de longitud se desplaza 10° de su posición de equilibrio. ¿Cuál es su velocidad en el punto más bajo? (g = 9.8 m/s²)",
    "opciones": [
        "v = 0.77 m/s",
        "v = 1.53 m/s",
        "v = 0.38 m/s",
        "v = 2.31 m/s"
    ],
    "correcta": 0
},
{
    "id": 29,
    "pregunta": "Una masa de 2 kg se coloca en un resorte de k = 300 N/m. ¿Cuál es la deformación del resorte en equilibrio? (g = 9.8 m/s²)",
    "opciones": [
        "x = 0.0653 m",
        "x = 0.1306 m",
        "x = 0.0327 m",
        "x = 0.0980 m"
    ],
    "correcta": 0
},
{
    "id": 30,
    "pregunta": "Un cuerpo de 8 kg se mueve con velocidad de 12 m/s. Calcula el trabajo necesario para duplicar su velocidad.",
    "opciones": [
        "W = 864 J",
        "W = 576 J",
        "W = 1152 J",
        "W = 432 J"
    ],
    "correcta": 0
},
// ==========================================
// MATEMÁTICAS - EXAMEN 3 (IDs 31-40)
// ==========================================
{
    "id": 31,
    "pregunta": "Simplifique: (a^(m+n))^(m-n) · (b^(n+p))^(n-p) · (c^(p+m))^(p-m). ¿Cuál es el exponente final de a?",
    "opciones": [
        "m² - n²",
        "m² + n²",
        "2mn",
        "m²n²"
    ],
    "correcta": 0
},
{
    "id": 32,
    "pregunta": "Calcule: √[3]{16x⁵y⁷} · √[3]{2x⁴y²}. ¿Cuál es el resultado simplificado?",
    "opciones": [
        "2xy³√[3]{4x²}",
        "2x³y³√[3]{4x}",
        "2x²y³√[3]{4x}",
        "4x²y³√[3]{4x}"
    ],
    "correcta": 0
},
{
    "id": 33,
    "pregunta": "Sean A = {x ∈ N / x es múltiplo de 3 y x < 20} y B = {x ∈ N / x es par y x < 15}. Determine A ∩ B.",
    "opciones": [
        "{6, 12}",
        "{6, 12, 18}",
        "{2, 4, 6, 8, 10, 12}",
        "{6, 12, 18, 24}"
    ],
    "correcta": 0
},
{
    "id": 34,
    "pregunta": "Simplifique la fórmula lógica: (p → q) ∨ (q → p). ¿Qué resultado se obtiene?",
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
    "pregunta": "Dados los polinomios P(x) = 5x³ - 2x² + 7x - 4 y Q(x) = 3x³ + 4x² - 5x + 2, calcule P(x) + Q(x).",
    "opciones": [
        "8x³ + 2x² + 2x - 2",
        "8x³ + 2x² + 12x - 2",
        "8x³ - 2x² + 12x - 2",
        "8x³ - 2x² + 2x + 2"
    ],
    "correcta": 0
},
{
    "id": 36,
    "pregunta": "Multiplique: (3x - 2)(x² + 4x - 5). ¿Cuál es el resultado?",
    "opciones": [
        "3x³ + 10x² - 23x + 10",
        "3x³ - 10x² + 23x + 10",
        "3x³ + 10x² + 23x - 10",
        "3x³ - 10x² - 23x - 10"
    ],
    "correcta": 0
},
{
    "id": 37,
    "pregunta": "Simplifique: (x^(m+n) · x^(m-n)) / (x^(2m) · x^(n-m)). ¿Cuál es el exponente final de x?",
    "opciones": [
        "m - n",
        "n - m",
        "2m",
        "0"
    ],
    "correcta": 3
},
{
    "id": 38,
    "pregunta": "Calcule el residuo de la división: (x⁴ + 3x³ - 2x² + 5x - 6) ÷ (x + 1).",
    "opciones": [
        "R(x) = -15",
        "R(x) = 15",
        "R(x) = -5",
        "R(x) = 5"
    ],
    "correcta": 0
},
{
    "id": 39,
    "pregunta": "Racionalice: 12 / (√[4]{8}). Exprese en su forma más simplificada.",
    "opciones": [
        "6√[4]{4}",
        "6√[4]{2}",
        "12√[4]{4}",
        "3√[4]{4}"
    ],
    "correcta": 0
},
{
    "id": 40,
    "pregunta": "En un grupo de 120 estudiantes, 75 estudian Matemáticas, 60 estudian Física y 30 estudian ambas. ¿Cuántos estudian solo Matemáticas?",
    "opciones": [
        "45",
        "30",
        "60",
        "15"
    ],
    "correcta": 0
},
// ==========================================
// BIOLOGÍA - EXAMEN 3 (IDs 41-50)
// ==========================================
{
    "id": 41,
    "pregunta": "En el sistema de clasificación de los seres vivos, la taxonomía utiliza categorías jerárquicas. ¿Cuál es el orden correcto de las categorías taxonómicas, de la más amplia a la más específica?",
    "opciones": [
        "Reino, Filum, Clase, Orden, Familia, Género, Especie",
        "Reino, Clase, Orden, Filum, Familia, Género, Especie",
        "Especie, Género, Familia, Orden, Clase, Filum, Reino",
        "Filum, Reino, Clase, Orden, Familia, Género, Especie"
    ],
    "correcta": 0
},
{
    "id": 42,
    "pregunta": "Los seis reinos biológicos propuestos por Carl Woese y otros científicos incluyen Arqueas, Eubacterias, Protistas, Hongos, Plantas y Animales. ¿Cuál es la principal diferencia entre las Arqueas y las Eubacterias?",
    "opciones": [
        "Las Arqueas tienen una historia evolutiva independiente y diferencias bioquímicas en su pared celular y ARN, mientras que las Eubacterias tienen peptidoglicano en su pared.",
        "Las Arqueas son eucariotas y las Eubacterias son procariotas.",
        "Las Arqueas realizan fotosíntesis, mientras que las Eubacterias son heterótrofas.",
        "Las Arqueas tienen núcleo definido y organelos, mientras que las Eubacterias no."
    ],
    "correcta": 0
},
{
    "id": 43,
    "pregunta": "El sistema binominal de nomenclatura, desarrollado por Carolus Linnaeus, asigna un nombre científico a cada especie. ¿Cómo se estructura correctamente un nombre científico?",
    "opciones": [
        "Género con mayúscula y especie con minúscula, ambos subrayados o en cursiva.",
        "Especie con mayúscula y género con minúscula, ambos en negrita.",
        "Género y especie con mayúscula inicial, sin subrayar.",
        "Especie en mayúscula y género en minúscula, con el nombre del autor al final."
    ],
    "correcta": 0
},
{
    "id": 44,
    "pregunta": "Los virus no se consideran organismos vivos. ¿Cuál de las siguientes características justifica esta afirmación?",
    "opciones": [
        "Los virus son acelulares y necesitan de una célula huésped para replicarse, ya que no tienen metabolismo propio.",
        "Los virus tienen células procariotas sin núcleo definido.",
        "Los virus poseen mitocondrias para producir ATP y pueden replicarse independientemente.",
        "Los virus son organismos unicelulares que realizan fotosíntesis."
    ],
    "correcta": 0
},
{
    "id": 45,
    "pregunta": "El nivel de organización de los seres vivos incluye varios niveles jerárquicos. ¿Cuál es el orden correcto desde el nivel más simple al más complejo?",
    "opciones": [
        "Átomo, Molécula, Organelo, Célula, Tejido, Órgano, Sistema, Organismo, Población, Comunidad, Ecosistema, Biosfera",
        "Célula, Tejido, Molécula, Organelo, Órgano, Sistema, Organismo",
        "Organelo, Molécula, Célula, Tejido, Órgano, Sistema, Población",
        "Átomo, Célula, Tejido, Organelo, Órgano, Sistema, Biosfera"
    ],
    "correcta": 0
},
{
    "id": 46,
    "pregunta": "En la clasificación biológica, el ser humano pertenece a la especie Homo sapiens. ¿Cuál es la categoría taxonómica correspondiente al grupo que incluye a los primates como los humanos, chimpancés y gorilas?",
    "opciones": [
        "Orden Primates",
        "Familia Hominidae",
        "Clase Mammalia",
        "Filum Chordata"
    ],
    "correcta": 0
},
{
    "id": 47,
    "pregunta": "Las células madre se clasifican según su potencial de diferenciación. ¿Cuál de las siguientes afirmaciones describe correctamente a las células madre pluripotentes?",
    "opciones": [
        "Pueden diferenciarse en cualquier tipo celular de los tres linajes embrionarios (endodermo, mesodermo y ectodermo), pero no pueden formar un organismo completo.",
        "Pueden formar un organismo completo, incluyendo tejidos extraembrionarios como la placenta.",
        "Solo pueden generar células de su misma capa embrionaria de origen.",
        "Solo pueden formar un único tipo celular específico."
    ],
    "correcta": 0
},
{
    "id": 48,
    "pregunta": "La diferenciación celular es un proceso por el cual las células adquieren formas y funciones especializadas. ¿Cuál de las siguientes afirmaciones sobre la diferenciación celular es correcta?",
    "opciones": [
        "La diferenciación celular implica la activación y desactivación selectiva de genes, y los cambios en la morfología celular son irreversibles.",
        "La diferenciación celular es reversible en todos los tipos celulares.",
        "Durante la diferenciación, el material genético (ADN) cambia permanentemente.",
        "La diferenciación celular solo ocurre durante el desarrollo embrionario, no en la vida adulta."
    ],
    "correcta": 0
},
{
    "id": 49,
    "pregunta": "Los organismos del reino Fungi (hongos) se diferencian de las plantas en que:",
    "opciones": [
        "Los hongos no realizan fotosíntesis y obtienen nutrientes mediante digestión externa y absorción.",
        "Los hongos son autótrofos y realizan fotosíntesis al igual que las plantas.",
        "Los hongos tienen pared celular de celulosa, igual que las plantas.",
        "Los hongos son organismos procariotas, mientras que las plantas son eucariotas."
    ],
    "correcta": 0
},
{
    "id": 50,
    "pregunta": "El reino Protista incluye organismos unicelulares y multicelulares simples. ¿Cuál de los siguientes organismos pertenece al reino Protista?",
    "opciones": [
        "Los protozoarios, algas y mohos acuáticos (oomicetos).",
        "Las bacterias y cianobacterias.",
        "Los hongos y levaduras.",
        "Las plantas superiores como los helechos."
    ],
    "correcta": 0
},
// ==========================================
// ANATOMÍA - EXAMEN 3 (IDs 51-60)
// ==========================================
{
    "id": 51,
    "pregunta": "La historia de la anatomía tiene figuras clave como Herófilo de Calcedonia. ¿Cuál de los siguientes aportes se atribuye a Herófilo?",
    "opciones": [
        "Diferenció el cerebro del cerebelo, describió el nervio óptico y el oculomotor, y denominó al duodeno.",
        "Realizó disecciones en monos y cerdos, sentando las bases de la anatomía durante siglos.",
        "Publicó 'Humani Corporis Fabrica', que revolucionó la anatomía en el siglo XVI.",
        "Describió los cuatro humores (bilis, bilis negra, flema y sangre) como base de la medicina."
    ],
    "correcta": 0
},
{
    "id": 52,
    "pregunta": "Galeno de Pérgamo fue un médico romano cuyas obras contenían errores porque basó sus disecciones en animales. ¿Cuál de las siguientes afirmaciones sobre Galeno es correcta?",
    "opciones": [
        "Sus informes anatómicos fueron la base del estudio médico durante siglos hasta la publicación de Vesalio en 1543.",
        "Fue el primer anatomista en realizar disecciones humanas en la Escuela de Alejandría.",
        "Descubrió la circulación pulmonar y la función del corazón como bomba.",
        "Fue el autor de 'Corpus Hipocraticum', el libro fundamental de la medicina."
    ],
    "correcta": 0
},
{
    "id": 53,
    "pregunta": "Andreas Vesalio es considerado el padre de la anatomía moderna. ¿Cuál fue su principal contribución?",
    "opciones": [
        "La publicación de 'Humani Corporis Fabrica' en 1543, basada en disecciones humanas y corrigiendo errores de Galeno.",
        "El descubrimiento de la circulación sanguínea y el funcionamiento del corazón.",
        "La creación del sistema binominal de nomenclatura para la clasificación de los seres vivos.",
        "La descripción de los planos anatómicos y los términos de posición."
    ],
    "correcta": 0
},
{
    "id": 54,
    "pregunta": "El plano sagital es todo plano paralelo al plano medio. ¿Cuál es la principal utilidad de los planos sagitales en anatomía?",
    "opciones": [
        "Permiten realizar cortes paralelos a la línea media, dividiendo el cuerpo en partes derecha e izquierda.",
        "Dividen el cuerpo en partes anterior y posterior.",
        "Dividen el cuerpo en partes superior e inferior.",
        "Permiten estudiar las estructuras profundas mediante cortes transversales."
    ],
    "correcta": 0
},
{
    "id": 55,
    "pregunta": "La posición anatómica estándar es fundamental para la descripción del cuerpo humano. ¿Cuál de las siguientes características corresponde a la posición anatómica?",
    "opciones": [
        "Sujeto de pie, mirada al horizonte, palmas de las manos extendidas hacia adelante y pies separados por un puño.",
        "Sujeto acostado boca arriba con miembros superiores e inferiores extendidos.",
        "Sujeto acostado boca abajo con la cabeza girada hacia un lado.",
        "Sujeto sentado con las manos sobre las rodillas y la espalda recta."
    ],
    "correcta": 0
},
{
    "id": 56,
    "pregunta": "Los términos de movimiento como abducción y aducción se utilizan para describir movimientos en el plano frontal. ¿Cuál de los siguientes movimientos corresponde a la abducción?",
    "opciones": [
        "Alejamiento de una estructura del plano medio del cuerpo.",
        "Aproximación de una estructura al plano medio del cuerpo.",
        "Rotación de una estructura alrededor de su eje longitudinal.",
        "Movimiento combinado de flexión, extensión, abducción y aducción."
    ],
    "correcta": 0
},
{
    "id": 57,
    "pregunta": "La pronación y supinación son movimientos específicos del antebrazo. ¿Cuál de las siguientes afirmaciones describe correctamente la supinación?",
    "opciones": [
        "Rotación del antebrazo que dirige la palma de la mano hacia adelante.",
        "Rotación del antebrazo que dirige la palma de la mano hacia atrás.",
        "Movimiento de la planta del pie hacia el plano medio.",
        "Movimiento de la planta del pie hacia lateral."
    ],
    "correcta": 0
},
{
    "id": 58,
    "pregunta": "La eversión e inversión son movimientos que ocurren a nivel del pie. ¿Cuál de las siguientes afirmaciones describe la inversión?",
    "opciones": [
        "La planta del pie se dirige hacia el plano medio del cuerpo.",
        "La planta del pie se aleja del plano medio del cuerpo.",
        "El pie rota alrededor de su eje longitudinal.",
        "El pie realiza un movimiento de flexión plantar."
    ],
    "correcta": 0
},
{
    "id": 59,
    "pregunta": "La circunducción es un movimiento complejo que combina varios movimientos básicos. ¿Cuál de los siguientes movimientos NO forma parte de la circunducción?",
    "opciones": [
        "Pronación.",
        "Abducción.",
        "Aducción.",
        "Flexión y extensión."
    ],
    "correcta": 0
},
{
    "id": 60,
    "pregunta": "En la terminología anatómica, el término 'contralateral' se refiere a:",
    "opciones": [
        "Una estructura situada en el lado opuesto del cuerpo.",
        "Una estructura situada en el mismo lado del cuerpo.",
        "Una estructura cercana al plano medio.",
        "Una estructura alejada del plano medio."
    ],
    "correcta": 0
}
];