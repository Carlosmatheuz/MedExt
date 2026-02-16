import { Block } from './types';

export const blocks: Block[] = [
  {
    id: 1,
    name: 'Bloco 1',
    releaseDate: '26/01/2026',
    topics: [
      { id: '1-1', title: 'História e Princípios do SUS', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '1-2', title: 'Aleitamento Materno', teacher: 'Amira Kheireddine Saleh', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '1-3', title: 'Alimentação Infantil', teacher: 'Amira Kheireddine Saleh', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '1-4', title: 'Introdução ao Sistema Reprodutor Feminino', teacher: 'Amanda Lino de Faria Lessa', category: 'G.O', originalLabel: '3. G.O' },
      { id: '1-5', title: 'Trauma - Conceitos iniciais e atendimento inicial', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '1-6', title: 'Avaliação do Hemograma e Anemias', teacher: 'Marco Aurélio Campanha Sartori', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '1-7', title: 'HAS Ambulatorial', teacher: 'Vitor Iglesias Mangolini', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
    ]
  },
  {
    id: 2,
    name: 'Bloco 2',
    releaseDate: '02/02/2026',
    topics: [
      { id: '2-1', title: 'Ciclo Menstrual', teacher: 'Nicole Kemberly Ribeiro Rocha', category: 'G.O', originalLabel: '2. G.O' },
      { id: '2-2', title: 'Gestação inicial', teacher: 'Guilherme Tavares de Sá', category: 'G.O', originalLabel: '2. G.O' },
      { id: '2-3', title: 'Crescimento e Baixa Estatura', teacher: 'Roberta de Oliveira Andrade', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '2-4', title: 'Puberdade', teacher: 'Roberta de Oliveira Andrade', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '2-5', title: 'ATLS - Letra A', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '2-6', title: 'ATLS - Letra B', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '2-7', title: 'Insuficiência Cardíaca', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '2-8', title: 'CofBasics - Avaliação de Vitalidade Fetal (G.O)', teacher: 'Gelson Farias Arcos Júnior', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 3,
    name: 'Bloco 3',
    releaseDate: '09/02/2026',
    topics: [
      { id: '3-1', title: 'Legislação do SUS', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '3-2', title: 'Assistência ao Pré-Natal', teacher: 'Isabela Marangon Pasotti', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '3-3', title: 'Tabagismo', teacher: 'Renato Miranda Lima', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '3-4', title: 'Nefrologia Pediátrica', teacher: 'Laura Coimbra Teixeira', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '3-5', title: 'ATLS - Letra C e X', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
    ]
  },
  {
    id: 4,
    name: 'Bloco 4',
    releaseDate: '16/02/2026',
    topics: [
      { id: '4-1', title: 'Espirometria Básica e Asma', teacher: 'Renato Miranda Lima', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '4-2', title: 'Doença Pulmonar Obstrutiva Crônica (DPOC)', teacher: 'Renato Miranda Lima', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '4-3', title: 'Diabetes: diagnóstico e abordagem ambulatorial', teacher: 'Felipe Johansen Capri', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '4-4', title: 'Estática Fetal', teacher: 'Graciella Calsolari Figueiredo de Farias', category: 'G.O', originalLabel: '2. G.O' },
      { id: '4-5', title: 'Assistência ao Parto', teacher: 'Graciella Calsolari Figueiredo de Farias', category: 'G.O', originalLabel: '2. G.O' },
      { id: '4-6', title: 'Gastropediatria', teacher: 'Camilla Silva Castro e Sousa', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '4-7', title: 'ATLS - Letra D', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '4-8', title: 'ATLS - Letra E e seguimento do tratamento', teacher: 'Henrique Simonsen Lunardeli', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '4-9', title: 'Diabetes: hipoglicemia e emergências hiperglicêmicas', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 5,
    name: 'Bloco 5',
    releaseDate: '23/02/2026',
    topics: [
      { id: '5-1', title: 'Sofrimento Fetal Agudo', teacher: 'Gelson Farias Arcos Júnior', category: 'G.O', originalLabel: '1. G.O' },
      { id: '5-2', title: 'Pneumonias', teacher: 'Giovanna Pereira Tardin', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '5-3', title: 'Bronquiolite e Turberculose', teacher: 'Giovanna Pereira Tardin', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '5-4', title: 'Queimaduras', teacher: 'Yasmin Sales Medeiros', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '5-5', title: 'Urgência e Emergência Hipertensiva', teacher: 'Yago Henrique Padovan Chio', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '5-6', title: 'Neurovascular 1', teacher: 'Bruna Gutierres Gambirasio', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '5-7', title: 'Neurovascular 2', teacher: 'Bruna Gutierres Gambirasio', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '5-8', title: 'CofBasics - Semiologia Neurológica', teacher: 'Bruna Gutierres Gambirasio', category: 'CofBasics', originalLabel: '5. CofBasics' },
      { id: '5-9', title: 'CofBasics - Processo de Saúde e Doença', teacher: 'Felipe Daiko Fraga', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 6,
    name: 'Bloco 6',
    releaseDate: '02/03/2026',
    topics: [
      { id: '6-1', title: 'Níveis de Prevenção', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '6-2', title: 'Sífilis e uretrites infecciosas', teacher: 'Jaqueline Fabiano Palazzo', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '6-3', title: 'Tuberculose (adulto)', teacher: 'Jaqueline Fabiano Palazzo', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '6-4', title: 'Pediatria Geral', teacher: 'Guilherme Mantelato Garcia', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '6-5', title: 'Transtornos Psiquiátricos no Pós-Parto', teacher: 'Mariana Fidelis Solla', category: 'Saúde Mental', originalLabel: '3. Saúde Mental' },
      { id: '6-6', title: 'Puerpério', teacher: 'Isabela Marangon Pasotti', category: 'G.O', originalLabel: '4. G.O' },
      { id: '6-7', title: 'Abdome agudo - introdução', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
    ]
  },
  {
    id: 7,
    name: 'Bloco 7',
    releaseDate: '09/03/2026',
    topics: [
      { id: '7-1', title: 'Determinação Social do Processo Saúde-Doença', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '7-2', title: 'Infecção Urinária na Prática Clínica', teacher: 'Ricardo Miranda Borges', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '7-3', title: 'Amenorreias', teacher: 'Nicole Kemberly Ribeiro Rocha', category: 'G.O', originalLabel: '3. G.O' },
      { id: '7-4', title: 'Síndrome dos Ovários Policísticos', teacher: 'Amanda Lino de Faria Lessa', category: 'G.O', originalLabel: '3. G.O' },
      { id: '7-5', title: 'Convulsões na emergência', teacher: 'Thais Renata Hollanders dos Santos Fiani', category: 'Pediatria', originalLabel: '4. Pediatria' },
      { id: '7-6', title: 'Abdome agudo inflamatório - vias biliares', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
      { id: '7-7', title: 'Gasometria Arterial', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '6. Clínica Médica' },
      { id: '7-8', title: 'Distúrbios do Sódio e do Potássio', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '6. Clínica Médica' },
    ]
  },
  {
    id: 8,
    name: 'Bloco 8',
    releaseDate: '16/03/2026',
    topics: [
      { id: '8-1', title: 'Síndrome dispeptica', teacher: 'Diogo Delgado Dotta', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '8-2', title: 'Desenvolvimento Infantil', teacher: 'Amira Kheireddine Saleh', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '8-3', title: 'Rastreamentos', teacher: 'Beatriz Neves Coelho', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '8-4', title: 'Transtornos do desenvolvimento e aprendizagem', teacher: 'José Marcos Vieira', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '8-5', title: 'Sangramentos da Primeira Metade da Gestação', teacher: 'Graciella Calsolari', category: 'G.O', originalLabel: '3. G.O' },
      { id: '8-6', title: 'Sangramentos da Segunda Metade da Gestação', teacher: 'Isabela Marangon Pasotti', category: 'G.O', originalLabel: '3. G.O' },
      { id: '8-7', title: 'Abdome agudo inflamatório - apendicite', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '8-8', title: 'Pancreatite aguda e crônica', teacher: 'Diogo Delgado Dotta', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 9,
    name: 'Bloco 9',
    releaseDate: '23/03/2026',
    topics: [
      { id: '9-1', title: 'Introdução a Geriatria e Avaliação Geriátrica', teacher: 'Beatriz Augusta Pozzolo', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '9-2', title: 'Síndromes Geriátricas', teacher: 'Beatriz Augusta Pozzolo', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '9-3', title: 'Dermatoses e Infecções de Partes Moles', teacher: 'Roberta de Oliveira Andrade', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '9-4', title: 'Corrimentos Vaginais', teacher: 'Nicole Kemberly Ribeiro Rocha', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '9-5', title: 'Úlceras Genitais', teacher: 'Guilherme Tavares de Sá', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '9-6', title: 'Doença Inflamatória Pélvica Aguda', teacher: 'Amanda Lino de Faria Lessa', category: 'G.O', originalLabel: '2. G.O' },
      { id: '9-7', title: 'Dermatite Atópica', teacher: 'Laura Coimbra Teixeira', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '9-8', title: 'Abdome agudo inflamatório - diverticulite', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '9-9', title: 'CofBasics - Lesões Elementares (Pediatria)', teacher: 'Stella Oliveira Meireles Siqueira', category: 'CofBasics', originalLabel: '5. CofBasics' },
      { id: '9-10', title: 'CofBasics - Fundamentos de Bioestatística', teacher: 'Luana Alves Suleiman', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 10,
    name: 'Bloco 10',
    releaseDate: '30/03/2026',
    topics: [
      { id: '10-1', title: 'Indicadores de Saúde', teacher: 'Luana Alves Suleiman', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '10-2', title: 'Infecção de Vias Aéreas Superiores', teacher: 'Roberta de Oliveira Andrade', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '10-3', title: 'Rotura Prematura de Membranas Ovulares', teacher: 'Guilherme Tavares de Sá', category: 'G.O', originalLabel: '3. G.O' },
      { id: '10-4', title: 'Abdome agudo obstrutivo', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '10-5', title: 'Artrites', teacher: 'Luis Fernando Fernandes Ferrari', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '10-6', title: 'Fibromialgia', teacher: 'Luis Fernando Fernandes Ferrari', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 11,
    name: 'Bloco 11',
    releaseDate: '06/04/2026',
    topics: [
      { id: '11-1', title: 'Hematopediatria 1', teacher: 'Julia Loureiro Sion', category: 'Pediatria', originalLabel: '1. Pediatria' },
      { id: '11-2', title: 'Hematopediatria 2', teacher: 'Julia Loureiro Sion', category: 'Pediatria', originalLabel: '1. Pediatria' },
      { id: '11-3', title: 'Hérnias', teacher: 'N/A', category: 'Cirurgia', originalLabel: '2. Cirurgia' },
      { id: '11-4', title: 'Coagulopatias', teacher: 'Marco Aurélio Campanha Sartori', category: 'Clínica Médica', originalLabel: '3. Clínica Médica' },
      { id: '11-5', title: 'Onco-hematologia', teacher: 'Marco Aurélio Campanha Sartori', category: 'Clínica Médica', originalLabel: '3. Clínica Médica' },
      { id: '11-6', title: 'Estudos Epidemiológicos', teacher: 'Darizon José de Oliveira Filho', category: 'Saúde Coletiva', originalLabel: '4. Saúde Coletiva' },
      { id: '11-7', title: 'CofBasics - Associação e Causalidade', teacher: 'Darizon José de Oliveira Filho', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 12,
    name: 'Bloco 12',
    releaseDate: '13/04/2026',
    topics: [
      { id: '12-1', title: 'Medidas de Associação', teacher: 'Darizon José de Oliveira Filho', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '12-2', title: 'Diarreia Aguda', teacher: 'Roberta de Oliveira Andrade', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '12-3', title: 'Sangramento Uterino Anormal', teacher: 'Graciella Calsolari', category: 'G.O', originalLabel: '3. G.O' },
      { id: '12-4', title: 'Dor Pélvica', teacher: 'Marilia Albanezi Bertolazzi', category: 'G.O', originalLabel: '3. G.O' },
      { id: '12-5', title: 'Perioperatório do cirurgiao', teacher: 'Pier Paolo Paradisi', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '12-6', title: 'Taquiarritmias e ACL/BLS', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '12-7', title: 'Bradiarritmias e síncope', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 13,
    name: 'Bloco 13',
    releaseDate: '20/04/2026',
    topics: [
      { id: '13-1', title: 'Redes de Atenção à Saúde', teacher: 'Gustavo Antônio Toniatti', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '13-2', title: 'Violência Sexual', teacher: 'Guilherme Tavares e Gelson Farias', category: 'G.O', originalLabel: '2. G.O' },
      { id: '13-3', title: 'Febre Sem Sinais Localizatórios', teacher: 'Laura Coimbra Teixeira', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '13-4', title: 'Técnica operatória', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '13-5', title: 'Pneumonia: PAC e hospitalar', teacher: 'Renato Miranda Lima', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '13-6', title: 'Derrame pleural', teacher: 'Renato Miranda Lima', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 14,
    name: 'Bloco 14',
    releaseDate: '27/04/2026',
    topics: [
      { id: '14-1', title: 'Atenção Primária à Saúde', teacher: 'Gustavo Antônio Toniatti', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '14-2', title: 'Diabetes na Gestação', teacher: 'Gelson Farias Arcos Júnior', category: 'G.O', originalLabel: '2. G.O' },
      { id: '14-3', title: 'Suporte Avançado de Vida em Pediatria (PALS)', teacher: 'Camilla Silva Castro e Sousa', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '14-4', title: 'Cetoacidose diabética na Pediatria', teacher: 'Roberta de Oliveira Andrade', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '14-5', title: 'Esôfago no ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '14-6', title: 'Dislipidemia', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '14-7', title: 'Síndrome metabólica e Obesidade', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 15,
    name: 'Bloco 15',
    releaseDate: '04/05/2026',
    topics: [
      { id: '15-1', title: 'Ferramentas da APS', teacher: 'Vinícius Giaquinto Rocha', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '15-2', title: 'Cefaleias', teacher: 'Bruna Gutierres Gambirasio', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '15-3', title: 'Infecções na Gravidez', teacher: 'Isabela Marangon Pasotti', category: 'G.O', originalLabel: '3. G.O' },
      { id: '15-4', title: 'Infecções Congênitas', teacher: 'Amira Kheireddine Saleh', category: 'Pediatria', originalLabel: '4. Pediatria' },
      { id: '15-5', title: 'Cirurgia Bariatrica', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
      { id: '15-6', title: 'Meningites', teacher: 'Bruna Gutierres Gambirasio', category: 'Clínica Médica', originalLabel: '6. Clínica Médica' },
    ]
  },
  {
    id: 16,
    name: 'Bloco 16',
    releaseDate: '11/05/2026',
    topics: [
      { id: '16-1', title: 'Icterícias febris e febre maculosa', teacher: 'Jaqueline Fabiano Palazzo', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '16-2', title: 'Hepatites Virais', teacher: 'Edson Luiz Tarsia Duarte', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '16-3', title: 'Abordagem Familiar e Comunitária', teacher: 'Vinícius Giaquinto Rocha', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '16-4', title: 'Síndromes Hipertensivas na Gestação', teacher: 'Isabela Marangon Pasotti', category: 'G.O', originalLabel: '2. G.O' },
      { id: '16-5', title: 'Neoplasias Pediátricas', teacher: 'Julia Loureiro Sion', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '16-6', title: 'Urologia do Pronto Socorro', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
    ]
  },
  {
    id: 17,
    name: 'Bloco 17',
    releaseDate: '18/05/2026',
    topics: [
      { id: '17-1', title: 'Estratégia da Saúde da Família', teacher: 'Gustavo Antônio Toniatti', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '17-2', title: 'Mastologia', teacher: 'Pier Paolo Paradisi', category: 'G.O', originalLabel: '2. G.O' },
      { id: '17-3', title: 'Infecção de Trato Urinário e Meningite', teacher: 'Fernando Sarin', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '17-4', title: 'Trauma Urológico', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '17-5', title: 'SRAG + suportes ventilatórios', teacher: 'Yago Henrique Padovan Chio', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '17-6', title: 'Intoxicações', teacher: 'Yago Henrique Padovan Chio', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '17-7', title: 'CofBasics - Propedêutica Mamária', teacher: 'Pier Paolo Paradisi', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 18,
    name: 'Bloco 18',
    releaseDate: '25/05/2026',
    topics: [
      { id: '18-1', title: 'MCCP - Método Clínico Centrado na Pessoa', teacher: 'Beatriz Neves Coelho', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '18-2', title: 'Uroginecologia', teacher: 'Nicole Kemberly Ribeiro Rocha', category: 'G.O', originalLabel: '2. G.O' },
      { id: '18-3', title: 'Sepse e Choque Séptico Pediátrico', teacher: 'Thais Renata Hollanders', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '18-4', title: 'Uro-oncologia', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '18-5', title: 'Hiperplasia prostatica benigna', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '18-6', title: 'Cirrose Hepática 1', teacher: 'Diogo Delgado Dotta', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '18-7', title: 'Cirrose Hepática 2', teacher: 'Diogo Delgado Dotta', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '18-8', title: 'CofBasics - Propedêutica em Uroginecologia', teacher: 'Graciella Calsolari', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 19,
    name: 'Bloco 19',
    releaseDate: '01/06/2026',
    topics: [
      { id: '19-1', title: 'Doenças negligenciadas', teacher: 'Edson Luiz Tarsia Duarte', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '19-2', title: 'Hanseníase', teacher: 'Edson Luiz Tarsia Duarte', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '19-3', title: 'Habilidades de Comunicação', teacher: 'Beatriz Neves Coelho', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '19-4', title: 'Câncer de Colo de Útero', teacher: 'Mariana Solla e Marilia Bertolazzi', category: 'G.O', originalLabel: '2. G.O' },
      { id: '19-5', title: 'Triagens Neonatais e Hipoglicemia', teacher: 'Guilherme Mantelato Garcia', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '19-6', title: 'Nodulos hepaticos benignos', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
    ]
  },
  {
    id: 20,
    name: 'Bloco 20',
    releaseDate: '08/06/2026',
    topics: [
      { id: '20-1', title: 'Testes diagnósticos', teacher: 'Darizon José de Oliveira Filho', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '20-2', title: 'Outros Cânceres Ginecológicos', teacher: 'Marilia Albanezi Bertolazzi', category: 'G.O', originalLabel: '2. G.O' },
      { id: '20-3', title: 'Icterícia e Colestase Neonatal', teacher: 'Guilherme Mantelato Garcia', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '20-4', title: 'Adenocarcinoma de pancreas', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '20-5', title: 'Glomerulopatias', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '20-6', title: 'Injúria renal aguda', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '20-7', title: 'Doença Renal Crônica', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 21,
    name: 'Bloco 21',
    releaseDate: '15/06/2026',
    topics: [
      { id: '21-1', title: 'Vigilância em Saúde', teacher: 'Luana Alves Suleiman', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '21-2', title: 'Insuficiência cognitiva no idoso', teacher: 'Beatriz Augusta Pozzolo', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '21-3', title: 'Infertilidade', teacher: 'Amanda Lino de Faria Lessa', category: 'G.O', originalLabel: '3. G.O' },
      { id: '21-4', title: 'Dengue na Pediatria', teacher: 'Mariah Della Nina Rodrigues', category: 'Pediatria', originalLabel: '4. G.O (Pediatria)' }, // Corrected category based on content
      { id: '21-5', title: 'Hemorroidas e Doenças orificiais', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
      { id: '21-6', title: 'Hemorragia digestiva alta', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
      { id: '21-7', title: 'Sindrome de Fournier', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
    ]
  },
  {
    id: 22,
    name: 'Bloco 22',
    releaseDate: '22/06/2026',
    topics: [
      { id: '22-1', title: 'Saúde do Trabalhador', teacher: 'Yuri Franco Trunckle', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '22-2', title: 'Principais Doenças e Agravos Relacionados ao Trabalho', teacher: 'Yuri Franco Trunckle', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '22-3', title: 'Exantemáticas', teacher: 'Mariah Della Nina Rodrigues', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '22-4', title: 'Adenocarcinoma Gastrico e GIST', teacher: 'N/A', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '22-5', title: 'Síndromes Coronarianas Agudas', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '22-6', title: 'Dor Torácica Não Anginosa', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
    ]
  },
  {
    id: 23,
    name: 'Bloco 23',
    releaseDate: '29/06/2026',
    topics: [
      { id: '23-1', title: 'Ética Médica', teacher: 'Yuri Franco Trunckle', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '23-2', title: 'Oftalmologia: afecções comuns', teacher: 'Carolina Minelli Martines', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '23-3', title: 'Otorrino para o clínico', teacher: 'Guilherme Rodrigues Marinho', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '23-4', title: 'Climatério', teacher: 'Mariana Fidelis Solla', category: 'G.O', originalLabel: '3. G.O' },
      { id: '23-5', title: 'Genética', teacher: 'Roberta de Oliveira Andrade', category: 'Pediatria', originalLabel: '4. Pediatria' },
      { id: '23-6', title: 'Cancer colorretal', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
      { id: '23-7', title: 'CofBasics: Psicofarmacologia', teacher: 'Danilo Seabra', category: 'CofBasics', originalLabel: '6. CofBasics' },
    ]
  },
  {
    id: 24,
    name: 'Bloco 24',
    releaseDate: '06/07/2026',
    topics: [
      { id: '24-1', title: 'Declaração de Óbito, Atestados e Laudos', teacher: 'Yuri Franco Trunckle', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '24-2', title: 'Síndrome Depressiva', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '24-3', title: 'Hipertensão Arterial', teacher: 'Camilla Silva Castro e Sousa', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '24-4', title: 'Câncer de pulmão', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '24-5', title: 'Diarreias', teacher: 'Diogo Delgado Dotta', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
      { id: '24-6', title: 'Osteoporose e Distúrbios do Cálcio', teacher: 'Luis Fernando Fernandes Ferrari', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 25,
    name: 'Bloco 25',
    releaseDate: '13/07/2026',
    topics: [
      { id: '25-1', title: 'Arboviroses', teacher: 'Jaqueline Fabiano Palazzo', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '25-2', title: 'Parasitoses', teacher: 'Fernando Sarin', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '25-3', title: 'Planejamento Familiar', teacher: 'Mariana Fidelis Solla', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '25-4', title: 'Síndrome Ansiosa', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '25-5', title: 'Síndrome Maníaca', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '25-6', title: 'Cirurgia vascular no ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '25-7', title: 'HIV', teacher: 'Jaqueline Fabiano Palazzo', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
    ]
  },
  {
    id: 26,
    name: 'Bloco 26',
    releaseDate: '20/07/2026',
    topics: [
      { id: '26-1', title: 'Atenção à Saúde de Populações Específicas', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '26-2', title: 'Violências', teacher: 'Felipe Daiko Fraga', category: 'Saúde Coletiva', originalLabel: '1. Saúde Coletiva' },
      { id: '26-3', title: 'Peçonhentos, Raiva e Tétano', teacher: 'Laura Coimbra Teixeira', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '26-4', title: 'Cuidado à Saúde LGBTQIAPN+', teacher: 'Gelson Farias Arcos Júnior', category: 'Medicina de Família e Comunidade', originalLabel: '2. MFC' },
      { id: '26-5', title: 'Violência e Maus Tratos Infantis', teacher: 'Marília Isabela Silveira de Morais', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '26-6', title: 'Cirurgia Plastica no ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '4. Cirurgia' },
      { id: '26-7', title: 'Valvopatias, Febre reumática e Endocardite', teacher: 'Vitor Iglesias Mangolini', category: 'Clínica Médica', originalLabel: '5. Clínica Médica' },
    ]
  },
  {
    id: 27,
    name: 'Bloco 27',
    releaseDate: '27/07/2026',
    topics: [
      { id: '27-1', title: 'Doenças Virais e Pandêmicas', teacher: 'Edson Luiz Tarsia Duarte', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '27-2', title: 'Acidentes com Animais Peçonhentos', teacher: 'Edson Luiz Tarsia Duarte', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '27-3', title: 'Dermatologia na APS', teacher: 'Thiago Santos', category: 'Medicina de Família e Comunidade', originalLabel: '1. MFC' },
      { id: '27-4', title: 'Síndrome Psicótica', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '2. Saúde Mental' },
      { id: '27-5', title: 'Sofrimento Fetal Crônico', teacher: 'Gelson Farias Arcos Júnior', category: 'G.O', originalLabel: '3. G.O' },
      { id: '27-6', title: 'Reumatologia Pediátrica', teacher: 'Laura Coimbra Teixeira', category: 'Pediatria', originalLabel: '4. Pediatria' },
      { id: '27-7', title: 'Ortopedia no ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '5. Cirurgia' },
    ]
  },
  {
    id: 28,
    name: 'Bloco 28',
    releaseDate: '03/08/2026',
    topics: [
      { id: '28-1', title: 'Emergências Psiquiátricas', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '1. Saúde Mental' },
      { id: '28-2', title: 'Transtornos alimentares, somatoformes', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '1. Saúde Mental' },
      { id: '28-3', title: 'Pneumologia Pediátrica', teacher: 'Camilla Silva Castro e Sousa', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '28-4', title: 'Anestesiologia no ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '28-5', title: 'Colagenoses: Lupus e SAF', teacher: 'Luis Fernando Fernandes Ferrari', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '28-6', title: 'Miscelâneas em reumatologia', teacher: 'Luis Fernando Fernandes Ferrari', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '28-7', title: 'Nefrolitíase', teacher: 'Ricardo Miranda Borges', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
    ]
  },
  {
    id: 29,
    name: 'Bloco 29',
    releaseDate: '10/08/2026',
    topics: [
      { id: '29-1', title: 'Hipotireoidismo', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '1. Clínica Médica' },
      { id: '29-2', title: 'Hipertireoidismo', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '1. Clínica Médica' },
      { id: '29-3', title: 'Nódulos e Câncer de Tireoide', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '1. Clínica Médica' },
      { id: '29-4', title: 'Prematuridade', teacher: 'Guilherme Tavares de Sá', category: 'G.O', originalLabel: '2. G.O' },
      { id: '29-5', title: 'Cirurgia Pediátrica no ENAMED', teacher: 'Victor da Paixão Guimarães', category: 'Pediatria', originalLabel: '3. Pediatria' },
      { id: '29-6', title: 'Ética em Pediatria', teacher: 'Marília Isabela Silveira de Morais', category: 'Pediatria', originalLabel: '3. Pediatria' },
    ]
  },
  {
    id: 30,
    name: 'Bloco 30',
    releaseDate: '17/08/2026',
    topics: [
      { id: '30-1', title: 'Transtornos relacionados a Substâncias - Álcool', teacher: 'Danilo Seabra', category: 'Saúde Mental', originalLabel: '1. Saúde Mental' },
      { id: '30-2', title: 'Vacinação', teacher: 'Mariah Della Nina Rodrigues', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '30-3', title: 'Reanimação Neonatal', teacher: 'Amira Kheireddine Saleh', category: 'Pediatria', originalLabel: '2. Pediatria' },
      { id: '30-4', title: 'Cabeça e pescoço para o ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '30-5', title: 'Encerramento Cirurgia ENAMED', teacher: 'N/A', category: 'Cirurgia', originalLabel: '3. Cirurgia' },
      { id: '30-6', title: 'Alergologia', teacher: 'Alex Isidoro Ferreira Prado', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '30-7', title: 'Sepse, anafilaxia e outros choques', teacher: 'Yago Henrique Padovan Chio', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
      { id: '30-8', title: 'Adrenal e Cushing', teacher: 'Felipe Johansen Capri', category: 'Clínica Médica', originalLabel: '4. Clínica Médica' },
    ]
  }
];
