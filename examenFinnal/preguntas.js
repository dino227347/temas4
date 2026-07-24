const preguntas = [
    // ==========================================
    // PREGUNTAS DIFÍCILES DE QUÍMICA (IDs 1-10)
    // ==========================================
    {
        "id": 1,
        "pregunta": "¿Cuál es la principal diferencia entre la teoría de los elementos peripatéticos de Aristóteles y la teoría atómica de Demócrito, y cómo influyó esto en el desarrollo de la química?",
        "opciones": [
            "Aristóteles propuso cuatro elementos (tierra, fuego, aire, agua) con cualidades intercambiables, mientras que Demócrito propuso átomos indivisibles con movimiento. La teoría aristotélica predominó durante siglos y retrasó la química moderna",
            "Ambos propusieron átomos indivisibles",
            "Aristóteles propuso átomos y Demócrito propuso los cuatro elementos",
            "Ambos coincidieron en que la materia es continua y no tiene límites"
        ],
        "correcta": 0
    },
    {
        "id": 2,
        "pregunta": "¿Cuál de los siguientes procesos de cambio de estado implica una disminución de la energía cinética de las partículas y una liberación de energía al medio?",
        "opciones": [
            "Condensación (gas → líquido)",
            "Fusión (sólido → líquido)",
            "Sublimación (sólido → gas)",
            "Evaporación (líquido → gas)"
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "¿Cómo se forma un enlace covalente coordinado en el ion hidronio (H3O+) y qué átomo actúa como donador?",
        "opciones": [
            "El oxígeno del agua dona un par de electrones no compartido al ion H+ (aceptor), formando un enlace covalente coordinado",
            "El hidrógeno dona un electrón al oxígeno",
            "El oxígeno acepta el par de electrones del hidrógeno",
            "No se forma un enlace coordinado, solo enlace iónico"
        ],
        "correcta": 0
    },
    {
        "id": 4,
        "pregunta": "¿Cuál de las siguientes sustancias presenta enlace iónico y covalente al mismo tiempo, y cómo se explica esta dualidad?",
        "opciones": [
            "El NaOH, donde el enlace Na-O es iónico y el enlace O-H es covalente polar, debido a la diferencia de electronegatividad",
            "El HCl, donde el enlace es puramente iónico",
            "El NaCl, donde el enlace es covalente",
            "El H2O, donde el enlace es iónico"
        ],
        "correcta": 0
    },
    {
        "id": 5,
        "pregunta": "¿Qué fenómeno explica la ascensión del agua en las plantas a través del xilema, y qué propiedades del agua están involucradas?",
        "opciones": [
            "La capilaridad y la tensión superficial, debido a las fuerzas de cohesión (entre moléculas de agua) y adhesión (entre agua y las paredes del xilema)",
            "La ósmosis y la difusión",
            "La evaporación y la condensación",
            "La gravedad y la presión atmosférica"
        ],
        "correcta": 0
    },
    {
        "id": 6,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre la configuración electrónica del oxígeno (Z=8) es correcta y cómo se relaciona con su capacidad para formar dos enlaces covalentes?",
        "opciones": [
            "1s2 2s2 2p4; tiene dos electrones desapareados en el subnivel 2p, lo que le permite compartir dos electrones para completar el octeto",
            "1s2 2s2 2p6; tiene todos los orbitales llenos y no forma enlaces",
            "1s2 2s2 2p3; tiene tres electrones desapareados",
            "1s2 2s2 2p5; tiene un electrón desapareado"
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "¿Cómo influye la hibridación sp2 del carbono en la geometría de las moléculas que lo contienen, como el eteno (C2H4), y qué ángulos de enlace se predicen?",
        "opciones": [
            "La hibridación sp2 produce una geometría trigonal plana con ángulos de enlace de 120°, como en el eteno",
            "La hibridación sp2 produce una geometría lineal con ángulos de 180°",
            "La hibridación sp2 produce una geometría tetraédrica con ángulos de 109.5°",
            "La hibridación sp2 no afecta la geometría molecular"
        ],
        "correcta": 0
    },
    {
        "id": 8,
        "pregunta": "¿Cuál de los siguientes tipos de interacciones intermoleculares es el principal responsable de la elevada temperatura de ebullición del agua en comparación con el H2S, a pesar de tener masas molares similares?",
        "opciones": [
            "Puentes de hidrógeno, que son interacciones más fuertes que las fuerzas de van der Waals",
            "Interacciones dipolo-dipolo, que son igualmente fuertes en ambas moléculas",
            "Fuerzas de dispersión de London, que son más fuertes en el agua",
            "Interacciones ión-dipolo, que son responsables de la alta temperatura de ebullición"
        ],
        "correcta": 0
    },
    {
        "id": 9,
        "pregunta": "¿Cuál es la diferencia fundamental entre un enlace covalente polar y un enlace covalente no polar, y cómo afecta esto a la solubilidad de las sustancias?",
        "opciones": [
            "Un enlace polar tiene una distribución asimétrica de electrones (diferencias de electronegatividad), lo que hace que la molécula sea polar y soluble en disolventes polares; un enlace no polar tiene distribución simétrica y es soluble en disolventes apolares",
            "Un enlace polar es más fuerte que un enlace no polar",
            "Un enlace polar no afecta la solubilidad",
            "Un enlace no polar es soluble en agua"
        ],
        "correcta": 0
    },
    {
        "id": 10,
        "pregunta": "Según la teoría de la mecánica cuántica, ¿qué representa exactamente un orbital atómico y cómo se diferencia de la órbita de Bohr?",
        "opciones": [
            "Un orbital es una función de onda que describe la región del espacio donde es más probable encontrar un electrón (densidad de probabilidad), mientras que la órbita de Bohr era una trayectoria circular definida",
            "Un orbital es una trayectoria elíptica definida",
            "Un orbital es un nivel de energía fijo como en Bohr",
            "Un orbital es una partícula sólida en movimiento"
        ],
        "correcta": 0
    },
    {
        "id": 11,
        "pregunta": "¿Cuál de las siguientes palabras es AGUDA y debe llevar tilde?",
        "opciones": [
            "Examen",
            "Carcel",
            "Árbol",
            "Lapiz"
        ],
        "correcta": 1
    },
    {
        "id": 12,
        "pregunta": "La palabra 'pérdida' lleva tilde en la 'e' porque es una palabra:",
        "opciones": [
            "Aguda terminada en vocal",
            "Grave terminada en consonante",
            "Esdrújula",
            "Sobresdrújula"
        ],
        "correcta": 1
    },
    {
        "id": 13,
        "pregunta": "¿Cuál de las siguientes palabras es GRAVE y NO debe llevar tilde?",
        "opciones": [
            "Cáncer",
            "Fácil",
            "Carcel",
            "Azúcar"
        ],
        "correcta": 2
    },
    {
        "id": 14,
        "pregunta": "¿Cuál de los siguientes monosílabos lleva tilde diacrítica cuando funciona como pronombre personal?",
        "opciones": [
            "el",
            "tu",
            "él",
            "de"
        ],
        "correcta": 2
    },
    {
        "id": 15,
        "pregunta": "En la oración 'Tú eres mi mejor amigo', la palabra 'tú' lleva tilde porque es:",
        "opciones": [
            "Artículo",
            "Pronombre personal",
            "Adjetivo posesivo",
            "Conjunción"
        ],
        "correcta": 1
    },
    {
        "id": 16,
        "pregunta": "La palabra 'solo' (adverbio) tradicionalmente llevaba tilde para distinguirse del adjetivo, pero según las nuevas normas de la RAE:",
        "opciones": [
            "Siempre debe llevar tilde",
            "Nunca debe llevar tilde",
            "Puede prescindirse de la tilde si no hay ambigüedad",
            "Solo lleva tilde cuando es adjetivo"
        ],
        "correcta": 2
    },
    {
        "id": 17,
        "pregunta": "La palabra 'cólera' es una palabra esdrújula, por lo tanto:",
        "opciones": [
            "No lleva tilde",
            "Lleva tilde siempre",
            "Lleva tilde solo si termina en vocal",
            "Lleva tilde solo si es aguda"
        ],
        "correcta": 1
    },
    {
        "id": 18,
        "pregunta": "¿Cuál de las siguientes palabras debe llevar tilde por ser una palabra ESDRÚJULA?",
        "opciones": [
            "Examen",
            "Cantidad",
            "Teléfono",
            "Origen"
        ],
        "correcta": 2
    },
    {
        "id": 19,
        "pregunta": "La palabra 'murciélago' se clasifica como:",
        "opciones": [
            "Aguda",
            "Grave",
            "Esdrújula",
            "Sobresdrújula"
        ],
        "correcta": 2
    },
    {
        "id": 20,
        "pregunta": "El acento prosódico se diferencia del acento ortográfico porque:",
        "opciones": [
            "Se pronuncia pero no se escribe",
            "Se escribe pero no se pronuncia",
            "Solo se usa en palabras agudas",
            "Es el mismo que el acento diacrítico"
        ],
        "correcta": 0
    },
    // ==========================================
// FÍSICA - EXAMEN 3 (IDs 21-30)
// ==========================================
{
    "id": 21,
    "pregunta": "Un bloque de 8 kg se desliza por un plano inclinado de 45° con coeficiente de fricción cinética 0.2. Si parte del reposo, ¿cuál es su aceleración? (g = 9.8 m/s²)",
    "opciones": [
        "a = 5.54 m/s²",
        "a = 6.93 m/s²",
        "a = 4.16 m/s²",
        "a = 8.32 m/s²"
    ],
    "correcta": 0
},
{
    "id": 22,
    "pregunta": "Un proyectil se lanza con velocidad de 50 m/s y ángulo de 37°. ¿Cuál es la altura máxima alcanzada? (g = 9.8 m/s²)",
    "opciones": [
        "h_max = 46.2 m",
        "h_max = 23.1 m",
        "h_max = 92.4 m",
        "h_max = 30.8 m"
    ],
    "correcta": 0
},
{
    "id": 23,
    "pregunta": "Dos masas de 3 kg y 7 kg están conectadas por una cuerda que pasa por una polea sin fricción. ¿Cuál es la tensión en la cuerda? (g = 9.8 m/s²)",
    "opciones": [
        "T = 41.16 N",
        "T = 29.4 N",
        "T = 68.6 N",
        "T = 19.6 N"
    ],
    "correcta": 0
},
{
    "id": 24,
    "pregunta": "Un cuerpo se lanza verticalmente hacia arriba con velocidad de 20 m/s. ¿Cuánto tiempo tarda en volver al punto de lanzamiento? (g = 9.8 m/s²)",
    "opciones": [
        "t_total = 4.08 s",
        "t_total = 2.04 s",
        "t_total = 8.16 s",
        "t_total = 1.02 s"
    ],
    "correcta": 0
},
{
    "id": 25,
    "pregunta": "Un auto de 1500 kg viaja a 25 m/s y frena con una fuerza de 7500 N. ¿Qué distancia recorre hasta detenerse?",
    "opciones": [
        "d = 62.5 m",
        "d = 31.25 m",
        "d = 125 m",
        "d = 15.6 m"
    ],
    "correcta": 0
},
{
    "id": 26,
    "pregunta": "Un bloque de 6 kg se encuentra sobre una superficie horizontal con μₛ = 0.6. ¿Cuál es la fuerza mínima horizontal necesaria para moverlo? (g = 9.8 m/s²)",
    "opciones": [
        "F_min = 35.28 N",
        "F_min = 58.8 N",
        "F_min = 17.64 N",
        "F_min = 70.56 N"
    ],
    "correcta": 0
},
{
    "id": 27,
    "pregunta": "Un cuerpo de 2 kg gira en un círculo de radio 3 m con velocidad de 6 m/s. ¿Cuál es la fuerza centrípeta?",
    "opciones": [
        "F_c = 24 N",
        "F_c = 12 N",
        "F_c = 48 N",
        "F_c = 6 N"
    ],
    "correcta": 0
},
{
    "id": 28,
    "pregunta": "Un bloque de 5 kg es jalado por una cuerda que forma 30° con la horizontal con una fuerza de 40 N. Si μₖ = 0.2, ¿cuál es la aceleración? (g = 9.8 m/s²)",
    "opciones": [
        "a = 3.96 m/s²",
        "a = 2.84 m/s²",
        "a = 5.12 m/s²",
        "a = 1.68 m/s²"
    ],
    "correcta": 0
},
{
    "id": 29,
    "pregunta": "Desde una altura de 100 m se lanza una piedra hacia abajo con velocidad de 5 m/s. ¿Con qué velocidad llega al suelo? (g = 9.8 m/s²)",
    "opciones": [
        "v = 44.7 m/s",
        "v = 31.6 m/s",
        "v = 63.2 m/s",
        "v = 22.4 m/s"
    ],
    "correcta": 0
},
{
    "id": 30,
    "pregunta": "Un resorte de constante k = 300 N/m se comprime 0.2 m. ¿Cuál es la energía potencial elástica almacenada?",
    "opciones": [
        "E_p = 6 J",
        "E_p = 3 J",
        "E_p = 12 J",
        "E_p = 1.5 J"
    ],
    "correcta": 0
},
// ==========================================
// MATEMÁTICAS - EXAMEN 5 (IDs 31-40)
// ==========================================
{
    "id": 31,
    "pregunta": "Simplifique: (x^(a-b))^(a+b) · (x^(b-c))^(b+c) · (x^(c-a))^(c+a). ¿Cuál es el exponente final de x?",
    "opciones": [
        "El exponente es 0",
        "El exponente es 1",
        "El exponente es -1",
        "El exponente es 2"
    ],
    "correcta": 0
},
{
    "id": 32,
    "pregunta": "Calcule: √[3]{27x^6y^9} · √[3]{8x^3y^6}. ¿Cuál es el resultado simplificado?",
    "opciones": [
        "6x³y⁵",
        "6x²y⁵",
        "6x³y⁴",
        "3x³y⁵"
    ],
    "correcta": 0
},
{
    "id": 33,
    "pregunta": "Sean A = {x ∈ Z / x² - 2x - 8 = 0} y B = {x ∈ Z / x es positivo y x < 6}. Determine A ∩ B.",
    "opciones": [
        "{4}",
        "{-2, 4}",
        "{2, 4}",
        "{4, 6}"
    ],
    "correcta": 0
},
{
    "id": 34,
    "pregunta": "Simplifique la fórmula lógica: (p ∧ ¬q) ∨ (¬p ∧ q). ¿Qué resultado se obtiene?",
    "opciones": [
        "Contingencia",
        "Tautología",
        "Contradicción",
        "Implicación"
    ],
    "correcta": 0
},
{
    "id": 35,
    "pregunta": "Dados los polinomios P(x) = x⁴ - 3x³ + 2x² - 5 y Q(x) = 2x⁴ + x³ - 4x² + 3x, calcule P(x) + Q(x).",
    "opciones": [
        "3x⁴ - 2x³ - 2x² + 3x - 5",
        "3x⁴ - 2x³ + 2x² + 3x - 5",
        "3x⁴ + 2x³ - 2x² + 3x - 5",
        "3x⁴ - 2x³ - 2x² - 3x - 5"
    ],
    "correcta": 0
},
{
    "id": 36,
    "pregunta": "Multiplique: (2x² + 3x - 1)(x² - 2x + 4). ¿Cuál es el resultado?",
    "opciones": [
        "2x⁴ - x³ + x² + 14x - 4",
        "2x⁴ + x³ + x² + 14x - 4",
        "2x⁴ - x³ - x² + 14x - 4",
        "2x⁴ - x³ + x² - 14x - 4"
    ],
    "correcta": 0
},
{
    "id": 37,
    "pregunta": "Simplifique: (x^(2m) · x^(3n) · x^(m-n)) / (x^(m+n) · x^(2n)). ¿Cuál es el exponente final de x?",
    "opciones": [
        "2m + 2n",
        "2m - 2n",
        "m + 2n",
        "2m + n"
    ],
    "correcta": 0
},
{
    "id": 38,
    "pregunta": "Calcule el residuo de la división: (x⁴ + 1) ÷ (x - 1).",
    "opciones": [
        "R(x) = 2",
        "R(x) = 0",
        "R(x) = -2",
        "R(x) = 1"
    ],
    "correcta": 0
},
{
    "id": 39,
    "pregunta": "Racionalice: 24 / (√[3]{9}). Exprese en su forma más simplificada.",
    "opciones": [
        "8√[3]{3}",
        "8√[3]{9}",
        "24√[3]{3}",
        "8√[3]{27}"
    ],
    "correcta": 0
},
{
    "id": 40,
    "pregunta": "De un grupo de 100 pacientes, 60 tienen dolor de cabeza, 45 tienen fiebre y 25 tienen ambos. ¿Cuántos tienen solo dolor de cabeza?",
    "opciones": [
        "35",
        "20",
        "40",
        "25"
    ],
    "correcta": 0
},
// ==========================================
// BIOLOGÍA - EXAMEN 5 (IDs 41-50)
// ==========================================
{
    "id": 41,
    "pregunta": "La glucólisis es una vía metabólica que ocurre en el citoplasma celular. ¿Cuál de las siguientes afirmaciones sobre la glucólisis es correcta?",
    "opciones": [
        "La glucólisis degrada una molécula de glucosa (6 carbonos) en dos moléculas de ácido pirúvico (3 carbonos cada una), generando un total neto de 2 ATP y 2 NADH.",
        "La glucólisis produce directamente 4 ATP y 4 NADH por cada glucosa, sin necesidad de oxígeno.",
        "La glucólisis es un proceso que solo ocurre en presencia de oxígeno.",
        "La glucólisis convierte la glucosa en glucógeno para su almacenamiento."
    ],
    "correcta": 0
},
{
    "id": 42,
    "pregunta": "En la glucólisis, la enzima fosfofructocinasa cataliza un paso clave. ¿Cuál es la reacción que cataliza esta enzima?",
    "opciones": [
        "La conversión de fructosa-6-fosfato a fructosa-1,6-difosfato, utilizando una molécula de ATP.",
        "La conversión de glucosa a glucosa-6-fosfato, utilizando una molécula de ATP.",
        "La conversión de fosfoenolpiruvato a ácido pirúvico, generando ATP.",
        "La conversión de 1,3-difosfoglicerato a 3-fosfoglicerato, generando ATP."
    ],
    "correcta": 0
},
{
    "id": 43,
    "pregunta": "En la cadena respiratoria, el complejo citocromo oxidasa (complejo IV) es el último transportador de electrones. ¿Cuál es su función específica?",
    "opciones": [
        "Transfiere electrones al oxígeno molecular (O₂), reduciéndolo a agua (H₂O).",
        "Transfiere electrones al NAD⁺ para formar NADH.",
        "Transfiere electrones a la coenzima Q (ubiquinona).",
        "Transfiere electrones al citocromo c, iniciando la transferencia."
    ],
    "correcta": 0
},
{
    "id": 44,
    "pregunta": "El ciclo de Krebs produce NADH y FADH₂ que donan electrones a la cadena de transporte. ¿Cuántas moléculas de NADH, FADH₂ y GTP se generan por cada vuelta del ciclo de Krebs?",
    "opciones": [
        "3 NADH, 1 FADH₂ y 1 GTP.",
        "2 NADH, 2 FADH₂ y 1 GTP.",
        "4 NADH, 1 FADH₂ y 0 GTP.",
        "3 NADH, 2 FADH₂ y 2 GTP."
    ],
    "correcta": 0
},
{
    "id": 45,
    "pregunta": "El efecto quimiosmótico en la fosforilación oxidativa se refiere a:",
    "opciones": [
        "El gradiente de protones (H⁺) generado en el espacio intermembranoso que impulsa la síntesis de ATP a través de la ATP sintasa.",
        "El transporte de electrones desde el NADH al oxígeno.",
        "La difusión pasiva de electrones a través de la membrana mitocondrial externa.",
        "La conversión de piruvato a acetil CoA."
    ],
    "correcta": 0
},
{
    "id": 46,
    "pregunta": "En el estado de post-absorción (ayuno), los niveles de glucosa en sangre comienzan a bajar. ¿Qué proceso metabólico se activa para mantener la glucemia?",
    "opciones": [
        "La glucogenólisis (degradación de glucógeno) y la gluconeogénesis (síntesis de glucosa a partir de sustratos no carbohidratos).",
        "La glucogénesis (síntesis de glucógeno) a partir de glucosa.",
        "La lipogénesis (síntesis de ácidos grasos).",
        "La proteólisis (degradación de proteínas) sin liberación de glucosa."
    ],
    "correcta": 0
},
{
    "id": 47,
    "pregunta": "El catabolismo de los lípidos (β-oxidación) produce Acetil CoA que ingresa al ciclo de Krebs. ¿Dónde ocurre la β-oxidación de los ácidos grasos?",
    "opciones": [
        "En la matriz mitocondrial.",
        "En el citoplasma celular.",
        "En el retículo endoplasmático liso.",
        "En el aparato de Golgi."
    ],
    "correcta": 0
},
{
    "id": 48,
    "pregunta": "La cadena de transporte de electrones está compuesta por cuatro complejos proteicos. ¿Cuál de ellos NO bombea protones (H⁺) al espacio intermembranoso?",
    "opciones": [
        "El complejo II (succinato deshidrogenasa), que solo transfiere electrones sin bombear protones.",
        "El complejo I (NADH deshidrogenasa), que bombea 4 H⁺.",
        "El complejo III (citocromo b-c₁), que bombea 4 H⁺.",
        "El complejo IV (citocromo oxidasa), que bombea 2 H⁺."
    ],
    "correcta": 0
},
{
    "id": 49,
    "pregunta": "¿Cuál de los siguientes nutrientes es el principal sustrato para la producción de ATP en el cerebro durante el ayuno prolongado, cuando las reservas de glucógeno se han agotado?",
    "opciones": [
        "Los cuerpos cetónicos (acetoacetato y β-hidroxibutirato), producidos a partir de ácidos grasos en el hígado.",
        "Los aminoácidos ramificados (valina, leucina e isoleucina).",
        "El ácido láctico producido por el músculo.",
        "La glucosa obtenida exclusivamente de la gluconeogénesis hepática."
    ],
    "correcta": 0
},
{
    "id": 50,
    "pregunta": "La glucólisis aeróbica y anaeróbica comparten las primeras reacciones hasta la formación de ácido pirúvico. ¿Cuál de las siguientes afirmaciones sobre el destino del NADH en la glucólisis anaeróbica es correcta?",
    "opciones": [
        "El NADH es reoxidado a NAD⁺ al reducir el piruvato a lactato, permitiendo que la glucólisis continúe sin oxígeno.",
        "El NADH se oxida directamente en la cadena de transporte de electrones, generando ATP.",
        "El NADH se almacena como reserva energética en el citoplasma.",
        "El NADH se convierte en NADPH mediante la transhidrogenasa."
    ],
    "correcta": 0
},
// ==========================================
// ANATOMÍA - EXAMEN 5 (IDs 51-60)
// ==========================================
{
    "id": 51,
    "pregunta": "El cráneo humano está formado por varios huesos unidos por suturas. ¿Cuál de las siguientes suturas se encuentra entre el hueso frontal y los huesos parietales?",
    "opciones": [
        "Sutura coronal.",
        "Sutura sagital.",
        "Sutura lambdoidea.",
        "Sutura escamosa."
    ],
    "correcta": 0
},
{
    "id": 52,
    "pregunta": "El hueso hioides es un hueso impar, medio y simétrico. ¿Cuál de las siguientes características describe correctamente al hueso hioides?",
    "opciones": [
        "Es un hueso irregular que no se articula con ningún otro hueso, situado en la región anterior del cuello.",
        "Es un hueso plano que forma parte de la órbita ocular.",
        "Es un hueso neumático que contiene cavidades llenas de aire.",
        "Es un hueso sesamoideo que se desarrolla en el tendón del músculo digástrico."
    ],
    "correcta": 0
},
{
    "id": 53,
    "pregunta": "El esqueleto apendicular está formado por los huesos de los miembros y las cinturas. ¿Cuántos huesos conforman el esqueleto apendicular en un adulto?",
    "opciones": [
        "126 huesos.",
        "80 huesos.",
        "206 huesos.",
        "64 huesos."
    ],
    "correcta": 0
},
{
    "id": 54,
    "pregunta": "La articulación temporomandibular (ATM) es una articulación sinovial que permite movimientos de apertura, cierre, protrusión y lateralidad. ¿Qué tipo de articulación es la ATM según su clasificación?",
    "opciones": [
        "Articulación elipsoide (condílea).",
        "Articulación en bisagra (troclear).",
        "Articulación en pivote (trocoide).",
        "Articulación en silla de montar."
    ],
    "correcta": 0
},
{
    "id": 55,
    "pregunta": "La articulación atlantoaxial (entre el atlas y el axis) permite el movimiento de rotación de la cabeza. ¿Qué tipo de articulación sinovial es la atlantoaxial?",
    "opciones": [
        "Articulación en pivote (trocoide).",
        "Articulación en bisagra (troclear).",
        "Articulación en esfera (eantrosis).",
        "Articulación plana (artrodia)."
    ],
    "correcta": 0
},
{
    "id": 56,
    "pregunta": "Las articulaciones de la mano incluyen las interfalángicas, que son articulaciones en bisagra. ¿Cuál de los siguientes movimientos es característico de una articulación troclear?",
    "opciones": [
        "Flexión y extensión en un solo plano (monoaxial).",
        "Movimientos de lateralidad y antero-posterior (biaxial).",
        "Rotación alrededor de un eje longitudinal (monoaxial).",
        "Movimientos en múltiples ejes (multiaxial)."
    ],
    "correcta": 0
},
{
    "id": 57,
    "pregunta": "El músculo cardíaco tiene características únicas que lo diferencian del músculo esquelético y liso. ¿Cuál de las siguientes afirmaciones es correcta sobre el músculo cardíaco?",
    "opciones": [
        "Es estriado e involuntario, con discos intercalares que permiten la conducción rápida del impulso eléctrico.",
        "Es no estriado y voluntario, controlado por el sistema nervioso somático.",
        "Es estriado y voluntario, con núcleos periféricos.",
        "Es no estriado e involuntario, con un único núcleo central."
    ],
    "correcta": 0
},
{
    "id": 58,
    "pregunta": "Los músculos cutáneos son músculos superficiales que se encuentran en la cabeza, cara y cuello. ¿Cuál de los siguientes músculos es un ejemplo de músculo cutáneo?",
    "opciones": [
        "El músculo platisma (cutáneo del cuello).",
        "El músculo bíceps braquial.",
        "El músculo recto femoral.",
        "El músculo diafragma."
    ],
    "correcta": 0
},
{
    "id": 59,
    "pregunta": "Los músculos según su función pueden ser agonistas, antagonistas o sinérgicos. ¿Cuál de las siguientes afirmaciones sobre los músculos sinérgicos es correcta?",
    "opciones": [
        "Son músculos que colaboran para realizar un mismo movimiento, reduciendo movimientos no deseados.",
        "Son músculos que se oponen a un movimiento determinado.",
        "Son músculos que realizan una función específica de manera principal.",
        "Son músculos que tienen dos o tres vientres musculares."
    ],
    "correcta": 0
},
{
    "id": 60,
    "pregunta": "El tejido muscular liso se encuentra en las paredes de estructuras internas huecas. ¿Cuál de las siguientes funciones es característica del músculo liso?",
    "opciones": [
        "Propulsión de alimentos a lo largo del tubo digestivo (peristaltismo).",
        "Bombeo de sangre hacia todo el cuerpo.",
        "Movimiento voluntario de las extremidades.",
        "Mantenimiento de la postura y producción de calor."
    ],
    "correcta": 0
}
];