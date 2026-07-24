const preguntas = [
    {
        "id": 1,
        "pregunta": "La regla del octeto de Lewis presenta excepciones. ¿Cuál de las siguientes moléculas es una excepción a esta regla y qué tipo de enlace presenta?",
        "opciones": [
            "BF₃, porque el boro solo comparte 6 electrones en su capa de valencia, formando un enlace covalente coordinado.",
            "BeCl₂, porque el berilio comparte 8 electrones mediante enlaces iónicos.",
            "CO₂, porque el carbono presenta 6 electrones en su capa de valencia por resonancia.",
            "NH₃, porque el nitrógeno solo tiene 6 electrones en su capa de valencia."
        ],
        "correcta": 0
    },
    {
        "id": 2,
        "pregunta": "En la formación del enlace iónico, la diferencia de electronegatividad (ΔEN) entre dos átomos es determinante. Según los valores de Pauling, ¿cuál de las siguientes combinaciones forma un enlace iónico típico y cuál es su ΔEN?",
        "opciones": [
            "Na (0.9) y Cl (3.0), ΔEN = 2.1, forman NaCl mediante transferencia electrónica total.",
            "C (2.5) y O (3.5), ΔEN = 1.0, forman CO₂ mediante enlace covalente polar.",
            "H (2.1) y F (4.0), ΔEN = 1.9, forman HF mediante enlace iónico por alta diferencia.",
            "Ca (1.0) y F (4.0), ΔEN = 3.0, forman CaF₂ mediante compartición de electrones."
        ],
        "correcta": 0
    },
    {
        "id": 3,
        "pregunta": "El enlace metálico se explica mediante la teoría del 'mar de electrones' y la teoría de bandas. ¿Cuál de las siguientes propiedades de los metales NO se explica directamente por el 'mar de electrones'?",
        "opciones": [
            "La ductilidad y maleabilidad, porque los electrones libres permiten el desplazamiento de los núcleos sin romper el enlace.",
            "El brillo metálico, porque los electrones libres reflejan la luz incidente.",
            "El alto punto de fusión, porque la atracción entre iones y electrones libres es muy fuerte.",
            "La conductividad eléctrica en estado sólido, porque los electrones se mueven libremente en la red."
        ],
        "correcta": 2
    },
    {
        "id": 4,
        "pregunta": "Las fuerzas intermoleculares de van der Waals incluyen interacciones dipolo-dipolo, fuerzas de dispersión y puentes de hidrógeno. ¿Cuál de las siguientes afirmaciones sobre los puentes de hidrógeno es correcta en el contexto biológico?",
        "opciones": [
            "Son las fuerzas más débiles de todas, con energía de enlace menor a 1 kcal/mol, y no afectan la estructura proteica.",
            "Requieren la presencia de un átomo de H unido a O, N o F, y un par de electrones libres en un átomo vecino, siendo clave en la estructura del ADN y las proteínas.",
            "Se forman exclusivamente entre moléculas de agua y no participan en la estabilización de biomoléculas.",
            "Son enlaces covalentes fuertes que estabilizan la estructura secundaria de las proteínas."
        ],
        "correcta": 1
    },
    {
        "id": 5,
        "pregunta": "La estructura de Lewis del ácido sulfúrico (H₂SO₄) presenta enlaces covalentes coordinados. ¿Cuántos pares de electrones libres quedan después de dibujar la estructura de Lewis correcta (considerando la carga formal mínima)?",
        "opciones": [
            "8 pares libres.",
            "12 pares libres.",
            "4 pares libres.",
            "10 pares libres."
        ],
        "correcta": 0
    },
    {
        "id": 6,
        "pregunta": "El enlace covalente polar se forma entre átomos con diferencia de electronegatividad moderada. ¿Cuál de las siguientes moléculas presenta enlaces covalentes polares pero es apolar a nivel molecular, y por qué?",
        "opciones": [
            "CO₂, porque la geometría lineal hace que los momentos dipolares se cancelen.",
            "H₂O, porque la geometría angular hace que los momentos dipolares se cancelen.",
            "HCl, porque la diferencia de electronegatividad es 0, lo que lo hace apolar.",
            "CH₄, porque el carbono es más electronegativo que el hidrógeno, generando un dipolo neto."
        ],
        "correcta": 0
    },
    {
        "id": 7,
        "pregunta": "Los compuestos iónicos presentan altos puntos de fusión y son buenos conductores en estado líquido. ¿Cuál de las siguientes afirmaciones explica correctamente por qué el NaCl sólido NO conduce la electricidad?",
        "opciones": [
            "Los iones Na⁺ y Cl⁻ están fijos en la red cristalina y no pueden moverse libremente.",
            "El NaCl sólido no tiene electrones libres, porque el enlace es covalente.",
            "Los iones Na⁺ y Cl⁻ se neutralizan entre sí en estado sólido, perdiendo su carga.",
            "El NaCl sólido conduce la electricidad porque los iones vibran en posiciones fijas."
        ],
        "correcta": 0
    },
    {
        "id": 8,
        "pregunta": "Las interacciones hidrofóbicas y los puentes salinos son cruciales en la estabilidad de las proteínas. ¿Cuál de las siguientes afirmaciones sobre las interacciones hidrofóbicas es correcta?",
        "opciones": [
            "Son interacciones covalentes entre cadenas laterales apolares y el agua, que estabilizan la estructura cuaternaria.",
            "Son fuerzas de van der Waals que excluyen al agua, favoreciendo que los aminoácidos apolares se agrupen en el interior de la proteína.",
            "Son enlaces de hidrógeno entre grupos polares y el agua, que mantienen la proteína en su estado nativo.",
            "Son interacciones iónicas entre aminoácidos con carga positiva y negativa, que se forman en el núcleo hidrofóbico."
        ],
        "correcta": 1
    },
    {
        "id": 9,
        "pregunta": "La teoría de repulsión de pares de electrones de valencia (TRPECV) predice la geometría molecular. Según esta teoría, ¿cuál es la geometría del ion amonio (NH₄⁺) y qué tipo de enlace covalente se forma?",
        "opciones": [
            "Geometría tetraédrica, con enlaces covalentes coordinados donados por el nitrógeno a cada hidrógeno.",
            "Geometría piramidal, con un enlace covalente coordinado y tres enlaces covalentes simples.",
            "Geometría lineal, con enlaces covalentes polares y un par de electrones libres en el nitrógeno.",
            "Geometría angular, con enlaces covalentes coordinados entre el nitrógeno y el hidrógeno."
        ],
        "correcta": 0
    },
    {
        "id": 10,
        "pregunta": "Los puentes disulfuro en las proteínas son enlaces covalentes que resultan de la oxidación de dos residuos de cisteína. ¿Cuál de las siguientes afirmaciones es correcta sobre estos enlaces?",
        "opciones": [
            "Son enlaces no covalentes que se rompen fácilmente con cambios de pH, como los puentes de hidrógeno.",
            "Son enlaces iónicos que se forman entre cadenas laterales de cisteína y lisina, estabilizando la estructura terciaria.",
            "Son enlaces covalentes que se forman entre dos grupos -SH de cisteínas, creando un puente -S-S- que estabiliza la estructura terciaria y cuaternaria de las proteínas.",
            "Son enlaces metálicos que requieren la presencia de iones de zinc para su formación, como en los dedos de zinc."
        ],
        "correcta": 2
    },
    {
        "id": 11,
        "pregunta": "En la morfología médica, el análisis de lexemas y morfemas es esencial. ¿Cuál de las siguientes palabras está formada por un lexema y dos morfemas derivativos (prefijo y sufijo) que cambian su significado?",
        "opciones": [
            "In-mov-ilidad (lexema: mov, prefijo: in-, sufijo: -idad).",
            "Cardio-logía (lexema: cardio, sufijo: -logía).",
            "Pre-operatorio (lexema: oper, prefijo: pre-, sufijo: -atorio).",
            "Hipotermia (lexema: term, prefijo: hipo-, sufijo: -ia)."
        ],
        "correcta": 0
    },
    {
        "id": 12,
        "pregunta": "Los prefijos médicos de origen griego y latín tienen significados específicos. ¿Cuál de las siguientes opciones relaciona correctamente el prefijo con su significado y un ejemplo médico?",
        "opciones": [
            "Peri- = alrededor; pericardio (membrana que envuelve el corazón).",
            "Endo- = fuera de; endoscopia (visualización externa).",
            "Epi- = dentro de; epidermis (capa interna de la piel).",
            "Hipo- = mucho; hipertensión (presión arterial elevada)."
        ],
        "correcta": 0
    },
    {
        "id": 13,
        "pregunta": "Los sufijos médicos indican acciones, condiciones o procedimientos. ¿Cuál de las siguientes palabras utiliza correctamente el sufijo '-ectomía' y cuál es su significado?",
        "opciones": [
            "Apendicectomía: extirpación quirúrgica del apéndice.",
            "Gastritis: extirpación del estómago.",
            "Hepatomegalia: extirpación del hígado.",
            "Artroscopia: extirpación de una articulación."
        ],
        "correcta": 0
    },
    {
        "id": 14,
        "pregunta": "En la terminología médica, el sufijo '-algia' indica dolor. ¿Cuál de las siguientes palabras significa 'dolor en el estómago' y cuál es su lexema?",
        "opciones": [
            "Gastralgia: lexema 'gastr-' (estómago) + sufijo '-algia' (dolor).",
            "Cefalea: lexema 'cefal-' (cabeza) + sufijo '-algia'.",
            "Mialgia: lexema 'mi-' (músculo) + sufijo '-algia'.",
            "Artralgia: lexema 'artr-' (articulación) + sufijo '-algia'."
        ],
        "correcta": 0
    },
    {
        "id": 15,
        "pregunta": "Los prefijos negativos en español, como 'in-', 'des-' y 'a-', invierten el significado de la palabra. ¿Cuál de las siguientes palabras usa correctamente el prefijo 'a-' con significado de 'privación' o 'negación'?",
        "opciones": [
            "Anestesia: falta de sensibilidad (a- + estesia = sensibilidad).",
            "Desnutrición: exceso de nutrición.",
            "Inmovilidad: capacidad de moverse.",
            "Asimetría: igualdad de forma."
        ],
        "correcta": 0
    },
    {
        "id": 16,
        "pregunta": "Los morfemas flexivos aportan nociones gramaticales como género, número, tiempo y persona. En la palabra 'cantábamos', ¿cuáles son los morfemas flexivos y qué información aportan?",
        "opciones": [
            "Raíz 'cant-'; morfema flexivo '-ábamos' indica tiempo pasado, modo indicativo, primera persona del plural.",
            "Raíz 'cant-'; morfema flexivo '-amos' indica tiempo presente, modo subjuntivo, primera persona del plural.",
            "Raíz 'cant-'; morfema flexivo '-ab-' indica tiempo futuro, modo indicativo, tercera persona del singular.",
            "Raíz 'cant-'; morfema flexivo '-mos' indica número singular y género femenino."
        ],
        "correcta": 0
    },
    {
        "id": 17,
        "pregunta": "Los prefijos locacionales indican posición o dirección. ¿Cuál de las siguientes opciones relaciona correctamente el prefijo con su significado y un ejemplo anatómico?",
        "opciones": [
            "Inter- = entre; intercostal (entre las costillas).",
            "Intra- = fuera de; intramuscular (fuera del músculo).",
            "Retro- = delante de; retroperitoneal (delante del peritoneo).",
            "Sub- = sobre; subcutáneo (sobre la piel)."
        ],
        "correcta": 0
    },
    {
        "id": 18,
        "pregunta": "En la formación de palabras médicas, los sufijos '-itis' e '-osis' indican procesos patológicos. ¿Cuál de las siguientes afirmaciones es correcta?",
        "opciones": [
            "Artritis: inflamación de la articulación; osteoporosis: degeneración del hueso.",
            "Artritis: degeneración de la articulación; osteoporosis: inflamación del hueso.",
            "Artritis: tumor de la articulación; osteoporosis: reblandecimiento del hueso.",
            "Artritis: ausencia de articulación; osteoporosis: formación de hueso."
        ],
        "correcta": 0
    },
    {
        "id": 19,
        "pregunta": "Los sufijos '-scopia' y '-tomía' tienen significados diferentes en procedimientos médicos. ¿Cuál de las siguientes opciones los define correctamente?",
        "opciones": [
            "-scopia: visualización (ej. endoscopia); -tomía: incisión o corte (ej. gastrectomía).",
            "-scopia: incisión (ej. endoscopia); -tomía: visualización (ej. gastrectomía).",
            "-scopia: estudio de (ej. endoscopia); -tomía: destrucción de (ej. gastrectomía).",
            "-scopia: reparación de (ej. endoscopia); -tomía: inflamación de (ej. gastrectomía)."
        ],
        "correcta": 0
    },
    {
        "id": 20,
        "pregunta": "Un objeto de 2 kg de masa se encuentra en reposo sobre una superficie horizontal con coeficiente de fricción estática μₛ = 0.4 y cinética μₖ = 0.3. Si se aplica una fuerza horizontal de 8 N, ¿qué ocurre con el objeto? (g = 9.8 m/s²)",
        "opciones": [
            "El objeto no se mueve, porque la fuerza de fricción estática máxima es 7.84 N, mayor que la fuerza aplicada.",
            "El objeto se mueve con aceleración de 0.5 m/s², porque la fuerza aplicada supera la fricción cinética.",
            "El objeto se mueve con aceleración de 0.2 m/s², porque la fuerza de fricción estática máxima es 4 N.",
            "El objeto no se mueve, porque la fuerza normal es mayor que la fuerza aplicada."
        ],
        "correcta": 0
    },
    {
        "id": 21,
        "pregunta": "Una máquina de Atwood tiene masas de 3 kg y 5 kg. Si se libera desde el reposo, ¿cuál es la tensión en la cuerda y la aceleración del sistema? (g = 9.8 m/s²)",
        "opciones": [
            "a = 2.45 m/s², T = 36.75 N",
            "a = 3.92 m/s², T = 39.2 N",
            "a = 1.96 m/s², T = 31.5 N",
            "a = 4.9 m/s², T = 44.1 N"
        ],
        "correcta": 0
    },
    {
        "id": 22,
        "pregunta": "Un bloque de 10 kg se desliza por un plano inclinado de 30° sin fricción, partiendo del reposo desde una altura de 5 m. ¿Cuál es su velocidad al llegar al final del plano inclinado?",
        "opciones": [
            "v = 9.9 m/s, usando conservación de la energía.",
            "v = 7.0 m/s, usando cinemática con a = g·senθ.",
            "v = 14.0 m/s, usando dinámica con a = g·cosθ.",
            "v = 4.9 m/s, usando caída libre."
        ],
        "correcta": 0
    },
    {
        "id": 23,
        "pregunta": "Un cuerpo de 50 kg es arrastrado por una fuerza de 200 N que forma un ángulo de 30° con la horizontal. El coeficiente de fricción cinética entre el cuerpo y el suelo es 0.2. ¿Cuál es la aceleración del cuerpo?",
        "opciones": [
            "a = 1.68 m/s², considerando la componente horizontal de la fuerza y la fricción.",
            "a = 2.31 m/s², despreciando la componente vertical de la fuerza.",
            "a = 0.8 m/s², usando solo la fuerza aplicada sin descomponer.",
            "a = 3.2 m/s², considerando la fricción máxima."
        ],
        "correcta": 0
    },
    {
        "id": 24,
        "pregunta": "Dos bloques de masas m₁ = 4 kg y m₂ = 6 kg están en contacto sobre una superficie sin fricción. Se aplica una fuerza horizontal de 30 N sobre m₁. ¿Cuál es la fuerza de contacto entre los bloques?",
        "opciones": [
            "F_contacto = 18 N",
            "F_contacto = 12 N",
            "F_contacto = 30 N",
            "F_contacto = 24 N"
        ],
        "correcta": 0
    },
    {
        "id": 25,
        "pregunta": "Un hombre arrastra un baúl por una rampa inclinada 20° con una fuerza F que forma 30° con la rampa. Si la componente paralela a la rampa es 60 N, ¿cuál es la magnitud de F y su componente perpendicular?",
        "opciones": [
            "F = 69.28 N, F_y = 34.64 N (perpendicular a la rampa).",
            "F = 80 N, F_y = 40 N.",
            "F = 60 N, F_y = 30 N.",
            "F = 100 N, F_y = 50 N."
        ],
        "correcta": 0
    },
    {
        "id": 26,
        "pregunta": "Un cuerpo de 20 kg cuelga de una cuerda que pasa por una polea fija. Si se aplica una fuerza de 150 N hacia abajo en el otro extremo, ¿cuál es la aceleración del cuerpo y la tensión en la cuerda?",
        "opciones": [
            "a = 2.3 m/s² (hacia arriba), T = 150 N.",
            "a = 4.9 m/s² (hacia abajo), T = 98 N.",
            "a = 0 m/s², T = 196 N.",
            "a = 3.7 m/s² (hacia arriba), T = 120 N."
        ],
        "correcta": 0
    },
    {
        "id": 27,
        "pregunta": "Un auto de 1200 kg viaja a 20 m/s y frena con una desaceleración constante de 5 m/s². ¿Cuál es la fuerza de fricción promedio que actúa sobre el auto y la distancia recorrida hasta detenerse?",
        "opciones": [
            "F = 6000 N, d = 40 m",
            "F = 24000 N, d = 80 m",
            "F = 12000 N, d = 20 m",
            "F = 3000 N, d = 60 m"
        ],
        "correcta": 0
    },
    {
        "id": 28,
        "pregunta": "Un bloque de 5 kg se encuentra sobre un plano inclinado de 45° con coeficiente de fricción cinética 0.2. Si se suelta desde el reposo, ¿cuál es su aceleración y la fuerza normal?",
        "opciones": [
            "a = 5.54 m/s², N = 34.65 N",
            "a = 6.93 m/s², N = 24.5 N",
            "a = 2.45 m/s², N = 49 N",
            "a = 4.9 m/s², N = 10 N"
        ],
        "correcta": 0
    },
    {
        "id": 29,
        "pregunta": "Dos bloques de 5 kg y 10 kg están conectados por una cuerda que pasa por una polea sin fricción. El bloque de 5 kg está sobre una mesa horizontal con coeficiente de fricción cinética 0.2. ¿Cuál es la aceleración del sistema?",
        "opciones": [
            "a = 5.23 m/s²",
            "a = 4.52 m/s²",
            "a = 6.53 m/s²",
            "a = 2.61 m/s²"
        ],
        "correcta": 0
    },
    {
        "id": 30,
        "pregunta": "Un astronauta tiene una masa de 70 kg en la Tierra. Si viaja a un planeta donde la aceleración de la gravedad es 4 m/s², ¿cuál es su peso y su masa en ese planeta?",
        "opciones": [
            "Peso = 280 N, masa = 70 kg",
            "Peso = 700 N, masa = 70 kg",
            "Peso = 280 N, masa = 28 kg",
            "Peso = 700 N, masa = 175 kg"
        ],
        "correcta": 0
    },
    {
        "id": 31,
        "pregunta": "Un cuerpo es lanzado verticalmente hacia arriba con velocidad de 25 m/s. ¿Cuál es la altura máxima alcanzada y el tiempo de subida? (g = 9.8 m/s²)",
        "opciones": [
            "h_max = 31.89 m, t_subida = 2.55 s",
            "h_max = 62.5 m, t_subida = 5.1 s",
            "h_max = 15.94 m, t_subida = 1.27 s",
            "h_max = 25 m, t_subida = 2.5 s"
        ],
        "correcta": 0
    },
    {
        "id": 32,
        "pregunta": "Un cuerpo de 8 kg se mueve en una superficie horizontal con velocidad de 10 m/s. Si el coeficiente de fricción cinética entre el cuerpo y la superficie es 0.25, ¿qué distancia recorrerá hasta detenerse?",
        "opciones": [
            "d = 20.41 m",
            "d = 40.82 m",
            "d = 10.2 m",
            "d = 30.6 m"
        ],
        "correcta": 0
    },
    {
        "id": 33,
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
        "id": 34,
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
        "id": 35,
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
        "id": 36,
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
        "id": 37,
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
        "id": 38,
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
        "id": 39,
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
        "id": 40,
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
        "id": 41,
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
        "id": 42,
        "pregunta": "Determine el exponente final de x en la expresión: √{x^(3/4)√{x^(3/4)√{x⁸}}(x²)^(-3)} / (x³)^(-2).",
        "opciones": [
            "El exponente es 4",
            "El exponente es -5",
            "El exponente es 1",
            "El exponente es 8"
        ],
        "correcta": 0
    },
    {
        "id": 43,
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
        "id": 44,
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
        "id": 45,
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
        "id": 46,
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
        "id": 47,
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
        "id": 48,
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
        "id": 49,
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
        "id": 50,
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
        "id": 51,
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
        "id": 52,
        "pregunta": "El metabolismo celular está regulado por enzimas y hormonas. ¿Cuál de las siguientes hormonas promueve la glucogenólisis (degradación de glucógeno) durante el estado de post-absorción?",
        "opciones": [
            "El glucagón, que estimula la degradación del glucógeno hepático para liberar glucosa a la sangre.",
            "La insulina, que promueve el almacenamiento de glucosa como glucógeno.",
            "La adrenalina, que inhibe la glucogenólisis para conservar energía.",
            "La hormona del crecimiento, que reduce la gluconeogénesis hepática."
        ],
        "correcta": 0
    },
    {
        "id": 53,
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
        "id": 54,
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
        "id": 55,
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
        "id": 56,
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
        "id": 57,
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
        "id": 58,
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
        "id": 59,
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
        "id": 60,
        "pregunta": "Los músculos agonistas y antagonistas trabajan en pares para producir movimiento. ¿Cuál de los siguientes ejemplos describe correctamente un par de músculos antagonistas?",
        "opciones": [
            "El bíceps braquial (flexor) y el tríceps braquial (extensor) en el codo.",
            "El cuádriceps (extensor) y el glúteo mayor (flexor) en la cadera.",
            "El deltoides (abductor) y el pectoral mayor (aductor) en el hombro.",
            "El esternocleidomastoideo (flexor) y el trapecio (extensor) en el cuello."
        ],
        "correcta": 0
    }
]