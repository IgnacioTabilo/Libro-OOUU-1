Search.setIndex({"docnames": ["ec/IIQ2013_C1", "intro", "p1/c1/e1_1_1", "p1/c1/e1_1_2", "p1/c1/e1_1_3", "p1/c1/fundamentos-y-analisis-dim", "p1/c2/prueba", "p1/c2/prueba2", "p1/c2/tuberias-y-bombas"], "filenames": ["ec\\IIQ2013_C1.ipynb", "intro.md", "p1\\c1\\e1_1_1.ipynb", "p1\\c1\\e1_1_2.ipynb", "p1\\c1\\e1_1_3.ipynb", "p1\\c1\\fundamentos-y-analisis-dim.md", "p1\\c2\\prueba.ipynb", "p1\\c2\\prueba2.ipynb", "p1\\c2\\tuberias-y-bombas.md"], "titles": ["IIQ2013 - Clase 1", "Libro de ejercicios para Operaciones Unitarias 1", "Ejercicio 1: Momentum y Fuerza", "Ejercicio 2: Hidroest\u00e1tica 1", "Ejercicio 3: Hidroest\u00e1tica 2", "Fundamentos de los fluidos", "Esto es una prueba", "Esta es una prueba 2", "Tuber\u00edas, singularidades y ordenamientos"], "terms": {"en": [0, 2, 3, 4, 5, 6, 8], "primer": 0, "lugar": 0, "se": [0, 2, 3, 4, 5, 6, 8], "deben": 0, "cargar": 0, "libreria": 0, "que": [0, 2, 3, 4, 6], "vamo": 0, "utilizar": 0, "import": 0, "numpi": 0, "np": 0, "coolprop": 0, "cp": 0, "free": 0, "version": 0, "refprop": 0, "A": [0, 2, 3, 4, 6], "continuaci\u00f3n": 0, "podemo": 0, "generar": 0, "una": [0, 3, 4], "funci\u00f3n": 0, "nos": [0, 6], "ayud": 0, "calcular": 0, "mu": 0, "usando": 0, "def": 0, "mu_hp": 0, "p_0": 0, "p_l": 0, "r": 0, "l": 0, "w": 0, "rho": [0, 2, 3, 6], "return": 0, "pi": [0, 2, 3, 4, 6], "4": [0, 4], "8": [0, 2, 4], "si": [0, 2], "necesitamo": [0, 4], "recuperar": 0, "alguna": 0, "propiedad": 0, "f\u00edsica": 0, "base": 0, "dato": [0, 2], "pued": [0, 6], "properti": 0, "p": 0, "1e5": 0, "fluid": 0, "nh3": 0, "densidad": [0, 2, 3, 4], "amoniaco": 0, "rho_l": 0, "propssi": 0, "d": [0, 2, 3], "q": [0, 6], "0": [0, 2, 3, 6], "viscosidad": 0, "mu_l": 0, "v": [0, 3], "print": 0, "2e": 0, "pa": [0, 4], "s": [0, 2, 4, 6], "1000": 0, "6": [0, 2], "82e": 0, "02": 0, "56e": 0, "04": 0, "01": 0, "l\u00edquido": [0, 6], "fluy": [0, 6], "un": [0, 1, 2, 3, 4, 6], "tubo": 0, "circular": [0, 6], "cil\u00edndrico": [0, 6], "cm": [0, 2, 3, 6], "di\u00e1metro": [0, 2, 3, 6], "y": [0, 3, 4, 5, 6], "10": [0, 6], "largo": [0, 2], "caudal": [0, 6], "volum\u00e9trico": 0, "ml": 0, "su": [0, 2, 6], "punto": [0, 4, 6], "saturaci\u00f3n": 0, "33": 0, "58": 0, "c": [0, 2, 4], "es": [0, 1, 2, 3, 4], "682": 0, "kg": [0, 2, 3, 4], "m": [0, 2, 3, 4, 6], "3": [0, 2, 3, 6], "256": 0, "calcul": [0, 4, 6], "ca\u00edda": 0, "presi\u00f3n": [0, 2, 3, 4, 6], "trav\u00e9": 0, "para": [0, 2, 3, 4, 6], "comprobar": 0, "aplicabilidad": 0, "necesario": 0, "comprar": 0, "el": [0, 1, 2, 3, 4, 6], "r\u00e9gimen": 0, "flujo": [0, 2], "mediant": 0, "volumetrico": 0, "vdot": 0, "1e": 0, "tuber\u00eda": [0, 2, 4, 6], "area": 0, "tuberia": 0, "velocidad": [0, 2, 6], "vz_av": 0, "re": 0, "3f": 0, "1698": 0, "891": 0, "delta_p": 0, "32": 0, "delta": 0, "2f": 0, "65": 0, "07": 0, "i": 1, "est": [1, 2, 4], "compilado": 1, "curso": 1, "ecuaci\u00f3n": [2, 6], "de": [2, 3, 4, 6], "bernoulli": [2, 6], "provien": 2, "equilibrio": 2, "entr": [2, 4], "ejerc": 2, "variaci\u00f3n": 2, "peso": 2, "del": [2, 3, 4, 6], "fluido": [2, 4], "lo": [2, 3, 4, 6, 8], "ignora": 2, "efecto": 2, "fricci\u00f3n": [2, 6], "superfici": 2, "entend": [2, 3], "mejor": [2, 3], "relaci\u00f3n": 2, "profesor": 2, "le": [2, 4], "propon": 2, "siguient": [2, 4], "caso": [2, 3, 6], "agua": [2, 3, 6], "25": [2, 3, 6], "con": [2, 3, 4, 6], "997": 2, "05": 2, "hspace": [2, 3, 4, 6], "1mm": [2, 3, 4, 6], "baja": 2, "constant": [2, 6], "por": [2, 3, 4, 6], "sistema": [2, 4], "cil\u00edndrica": 2, "hasta": [2, 4, 6], "alcanzar": [2, 6], "codo": 2, "cambiando": 2, "trayectoria": 2, "encuentra": [2, 4, 6], "sujetado": 2, "fierro": 2, "met\u00e1lico": 2, "u": 2, "qu\u00e9": 2, "somet": 2, "considerando": 2, "\u00fanicament": 2, "producido": 2, "inclinada": [2, 4], "60": 2, "respecto": 2, "al": [2, 6], "ej": [2, 4], "x": [2, 4], "sube": 2, "30": 2, "begin": [2, 3, 4, 6], "align": [2, 3, 4, 6], "textrm": [2, 3, 4, 6], "obtenemo": 2, "10pt": [2, 3, 4, 6], "050": 2, "m3": [2, 3, 4, 6], "080": 2, "\u00e1rea": [2, 3, 6], "transvers": [2, 6], "cual": [2, 3, 4], "pasa": 2, "cdot": [2, 3, 4, 6], "left": [2, 3, 4, 6], "frac": [2, 3, 4, 6], "2": 2, "right": [2, 3, 4, 6], "142": [2, 3, 4, 6], "005": 2, "m2": [2, 3, 6], "luego": [2, 3, 4, 6], "vendr\u00e1": 2, "dada": 2, "45": 2, "105": 2, "n": [2, 3], "ya": [2, 3, 6], "debemo": 2, "descompon": 2, "vector": 2, "e": [2, 6], "secci\u00f3n": [2, 5, 8], "va": 2, "direcci\u00f3n": 2, "aceleraci\u00f3n": 2, "m_": 2, "ybaja": 2, "sin": [2, 4], "39": 2, "062": 2, "xbaja": 2, "co": 2, "22": [2, 6], "553": 2, "manera": 2, "an\u00e1loga": 2, "ysube": 2, "xsube": 2, "finalment": [2, 6], "total": 2, "f_": 2, "16": 2, "510": 2, "61": 2, "615": 2, "end": [2, 3, 4, 6], "la": [3, 4, 5, 6], "fuerza": 3, "submarino": 3, "design\u00f3": 3, "operaci\u00f3n": 3, "investigaci\u00f3n": 3, "profundidad": 3, "fosa": 3, "atacama": 3, "fauna": 3, "marina": 3, "esta": [3, 4, 5, 8], "zona": 3, "inexplorada": 3, "realizar": 3, "dicha": 3, "cuenta": [3, 4], "tien": [3, 6], "ventana": 3, "ciruclar": 3, "part": [3, 4, 6], "inferior": [3, 6], "est\u00e1": 3, "dise\u00f1ada": 3, "soportar": 3, "600": 3, "kn": 3, "consider": 3, "dentro": 3, "igual": [3, 6], "atmosf\u00e9rica": [3, 4], "adem\u00e1": [3, 6], "alcanza": 3, "8069": 3, "1028": 3, "romper\u00e1": 3, "suponiendo": 3, "m\u00e1xima": 3, "s\u00ed": 3, "rompa": 3, "cu\u00e1l": 3, "m\u00ednima": 3, "deber\u00eda": 3, "sean": 3, "g": [3, 4, 6], "9": [3, 4, 6], "800": [3, 4, 6], "s2": [3, 4, 6], "h": [3, 6], "exterior": 3, "sient": 3, "p_": [3, 4], "81290333": 3, "ser\u00e1": [3, 4, 6], "100": 3, "049": 3, "percib": [3, 4], "f": 3, "3990329": 3, "919": 3, "tanto": 3, "deber\u00e1": 3, "mayor": 3, "o": [3, 6], "ust": 4, "estanqu": [4, 6], "conectado": 4, "do": 4, "abierta": 4, "ella": 4, "expuesta": 4, "vece": 4, "mientra": 4, "otra": 4, "195": 4, "kpa": 4, "compon": 4, "inmisc": 4, "rho_a": 4, "1306": 4, "b": [4, 6], "rho_b": 4, "2588": 4, "rho_c": 4, "8970": 4, "15": 4, "figura": 4, "observan": 4, "dimension": 4, "pide": 4, "encontrar": 4, "altura": [4, 6], "dond": 4, "esto": 4, "responda": 4, "marqu": 4, "encuentr": 4, "convenient": 4, "igualar": 4, "presion": 4, "completo": [4, 6], "metro": 4, "asuma": 4, "gravedad": 4, "como": [4, 6], "sabemo": 4, "202650": 4, "195300": 4, "rho_": 4, "150": 4, "primero": 4, "calculamo": 4, "diferencia": 4, "saber": 4, "hai": 4, "ambo": 4, "vertic": 4, "h_": [4, 6], "vert": 4, "llega": 4, "cuya": 4, "incl": 4, "5": 4, "536": 4, "notes": 4, "restamo": 4, "trozo": 4, "compuesta": 4, "tal": 4, "343044": 4, "425": 4, "son": 4, "equivalent": 4, "255136": 4, "955": 4, "despejando": [4, 6], "llegamo": 4, "expresi\u00f3n": 4, "675": 4, "encuentran": [5, 8], "ejercicio": [5, 8], "asociado": [5, 8], "hidroest\u00e1tica": 5, "d_e": 6, "llena": 6, "conectada": 6, "v\u00e1lvula": 6, "abrir": 6, "vac\u00eda": 6, "d_t": 6, "13": 6, "ignor": 6, "p\u00e9rdida": 6, "carga": 6, "singularidad": 6, "suponga": 6, "sale": 6, "momento": 6, "tiempo": 6, "demora": 6, "vaciars": 6, "ver": 6, "tenemo": 6, "p_a": 6, "h_a": 6, "u_a": 6, "2g": 6, "p_b": 6, "h_b": 6, "u_b": 6, "aplicada": 6, "descrito": 6, "queda": 6, "sqrt": 6, "2gh_a": 6, "resolviendo": 6, "u_": 6, "136": 6, "u_ba": 6, "render": 6, "long": 6, "d_": 6, "t": 6, "130": 6, "013": 6, "294": 6, "tambi\u00e9n": 6, "ser": 6, "escrito": 6, "dv": 6, "dt": 6, "mantien": 6, "dh_a": 6, "reemplazar": 6, "igualando": 6, "reordenando": 6, "t\u00e9rmino": 6, "2dt": 6, "inicialment": 6, "final": 6, "int_": 6, "int_0": 6, "t_t": 6, "3600": 6, "t_": 6, "130981": 6, "915": 6, "36": 6, "384": 6}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"iiq2103": [], "clase": 0, "1": [0, 1, 2, 3, 4, 6], "ecuaci\u00f3n": 0, "de": [0, 1, 5], "hagen": 0, "poiseuil": 0, "ejemplo": 0, "calculo": 0, "del": 0, "n\u00famero": 0, "reynold": 0, "2": [0, 3, 4, 6, 7], "aplicaci\u00f3n": 0, "la": [0, 2], "libro": 1, "ejercicio": [1, 2, 3, 4], "para": 1, "operacion": 1, "unitaria": 1, "momentum": 2, "y": [2, 8], "fuerza": 2, "enunciado": [2, 3, 4, 6], "informaci\u00f3n": 2, "sobr": 2, "figura": 2, "soluci\u00f3n": [2, 3, 4, 6], "hidroest\u00e1tica": [3, 4], "3": 4, "inciso": [4, 6], "fundamento": 5, "lo": 5, "fluido": 5, "esto": 6, "es": [6, 7], "una": [6, 7], "prueba": [6, 7], "esta": 7, "tuber\u00eda": 8, "singularidad": 8, "ordenamiento": 8, "iiq2013": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})