import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HelpIcon from "@material-ui/icons/Help";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DescriptionIcon from "@material-ui/icons/Description";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      position="relative"
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    flexDirection: "column",
    border: "2px solid transparent",
    height: "300px",

  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Normativas OPAS/OMS"
            icon={<DescriptionIcon style={{ color: '#d11507' }}/>}
            {...a11yProps(0)}
          />
          <Tab
            label="Histórias que Inspiram"
            icon={<FavoriteIcon style={{ color: '#d11507' }}/>}
            {...a11yProps(1)}
          />
          <Tab label="Conheça +" icon={<HelpIcon style={{ color: '#d11507' }}/>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <h3 style={{textAlign: "center"}}>Documentação Oficial da OMS</h3>
          <br />
          <p style={{textAlign: "center"}}>
          <a
            href="https://www.paho.org/pt/documentos/orientacao-para-elaboracao-um-plano-nacional-operacionalizacao-da-vacinacao-contra-covid"
            class="hoverImage"
          >
              <img border="0" src="https://www.paho.org/sites/default/files/styles/document_thumb/public/pdfpreview/81546-ndvpguidanceCOVID19vaccines-pr_0.png?itok=rWIJGjgd" alt="Foto do Documento"/>
          </a>
          </p>
          <br />
          <br />
          <p style={{textAlign: "center"}}>
          <a
            href="https://www.paho.org/pt/documentos/cuidado-ao-idoso-na-atencao-primaria-saude-em-tempos-covid-19"
            class="hoverImage"
          >
            <img border="0" src="https://www.paho.org/sites/default/files/styles/document_thumb/public/2021-03/cuidado_adulto_mayor-atencion_primaria-covid19-esp.png?itok=bcqsL3UX" alt="Foto do Documento"/>
          </a>
          </p>
          <br />
          <br />
          <p style={{textAlign: "center"}}>
          <a
            href="https://iris.paho.org/bitstream/handle/10665.2/53313/OPASIMSFPLCOVID-19210009_por.pdf?sequence=1&isAllowed=y"
            class="hoverImage"
          >
           <img border="0" src="https://www.paho.org/sites/default/files/styles/document_thumb/public/2021-02/riskcomms-vaccinecovid-19.png?itok=xYn3h7e0" alt="Foto do Documento"/>
          </a>
          </p>
          <br />
          <br />
          <p style={{textAlign: "center"}}>
          <a
            href="https://apps.who.int/iris/bitstream/handle/10665/332200/WHO-2019-nCoV-Ethics_Contact_tracing_apps-2020.1-eng.pdf?sequence=1&isAllowed=y"
            class="hoverImage"
          >
           <img border="0" src="https://www.paho.org/sites/default/files/styles/document_thumb/public/2021-04/who-2019-ncov-ethics_contact_tracing_apps-2020-en.jpg?itok=oxxFZXBM" alt="Foto do Documento"/>
          </a>
          </p>
          <br />
          <br />
          Fonte:
          <a href="https://www.paho.org/pt" class="hoverImage">
            Organização Pan-Americana de Saúde - OPAS
          </a>
          <br />
          <br />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h2 style={{textAlign: "center"}}>Conheça histórias de pessoas que cuidam!</h2>
          <h4 style={{textAlign: "center"}}>
            Talita atende urgências na saúde e também ajuda quem precisa de
            comida
          </h4>
          <p style={{textAlign: "center"}}><img border="0" src="https://historiadodia.com.br/wp-content/uploads/2020/06/des-1-4-400x250.jpg" alt="Foto da Talita"/></p>
          <p style={{textAlign: "justify"}}>
            A pandemia já havia chegado ao Brasil. Ela, que é técnica de
            enfermagem do Samu, atua na linha de frente. Viu a rotina mudar, o
            medo se instalar, o trabalho ficar ainda mais intenso. Nada disso
            foi impeditivo. Talita de Cico, 37 anos, ajuda a salvar vidas e a
            matar a fome. Leva atendimento de urgência, mas, depois, também
            atende quem precisa de roupas e alimentos. – Há muitas pessoas que
            precisam trabalhar de dia para comer à noite. E, agora, estão sem
            trabalho. Alguns pedem ajuda. Outros só oram. A solidariedade se
            desdobra em várias formas. Antes da pandemia ela já procurava estar
            atenta ao outro. Sempre encontrava uma forma de ajudar uma família,
            destinando parte do salário para isso. Agora, intensificou o ajudar.
            – As pessoas perderam empregos, estão sem trabalho e entraram em
            necessidade. Uma das coisas boas do meu trabalho é poder fazer algo
            a mais. Acolher uma mãe que vive uma dor, orientar uma mulher que
            sofre violência doméstica. Não precisa parar ali. No tempo livre –
            que é bem pouco! – ainda criou uma lista de transmissão no Whatsapp
            para compartilhar orientações de saúde, formas de evitar o contágio
            com mais de 100 inscritos entre amigos, familiares, conhecidos,
            parceiros da igreja que frequenta.
          </p>
          <br />
          <br />
          <h4 style={{textAlign: "center"}}>
            Com equipe de psicologia, Ana leva afeto e acolhimento para ambiente
            hospitalar
          </h4>
          <p style={{textAlign: "center"}}><img border="0" src="https://historiadodia.com.br/wp-content/uploads/2020/07/des-2-400x250.jpg" alt="Foto da Ana"/></p>
          <p style={{textAlign: "justify"}}>
            Há 20 anos, ela é parte do setor de psicologia do Hospital das
            Clínicas de Ribeirão Preto – Unidade de Emergência. Hoje, coordena a
            equipe, formada por 10 profissionais. Quando entrou, entretanto, mal
            se sabia qual era a função de um psicólogo em ambiente hospitalar. A
            primeira psicóloga a atuar no hospital chegou em 1998 e Ana veio
            dois anos depois, como a segunda profissional de toda a instituição.
            Ajudou o setor a crescer, mostrando sua importância. Aos poucos, o
            acolhimento psicológico passou a ser solicitado por mais e mais,
            presente hoje em todos os setores. – Na psicologia, a gente trabalha
            com a palavra, mas mais ainda com a escuta. Ser ouvido é um
            privilégio de poucos. Nós abraçamos escutando e até com os olhos,
            porque há pacientes que não conseguem falar. É a presença, o olhar.
            Esse trabalho de acolhimento está presente, inclusive, nos
            planejamentos estruturais. O psicólogo acompanha a evolução do
            paciente, participa das discussões de caso, é parte. “Bom dia! Eu
            sou a Ana, da UE, mas não aconteceu nada. Só estou ligando para
            saber como vocês estão. O seu filho está na UE, sendo cuidado pela
            equipe. Estou ligando para conhecer a senhora. Não é um momento
            fácil…”. É preciso carinho em cada palavra. Abordar por telefone uma
            mãe que internou seu filho com Covid-19 não é tarefa de dois
            minutos. Entre as primeiras palavras, Ana vai logo se explicando. –
            Algumas pessoas já passam mal só de receber a ligação do hospital. É
            preciso avisar que está tudo bem. Que o motivo da ligação é outro.
            Antes da pandemia, esse contato era feito pessoalmente, com a
            família presente no hospital. Ao longo de duas décadas de atuação,
            uma das conquistas de Ana foi deixar os familiares cada vez mais
            partícipes no tratamento, até mesmo na UTI. Na UE, os horários de
            visita eram estendidos, pela compreensão de que o contato entre o
            paciente e as pessoas queridas é uma importante frente no
            tratamento. A família é uma “parceira”, como ela diz. – Para
            resgatar o paciente, precisamos resgatar a vida dele lá fora. E a
            família é o elo mais importante dessa vida.
          </p>
          <br />
          <br />
          <p style={{textAlign: "justify"}} >
          Conheça mais em: 
          <a href="https://historiadodia.com.br/acervo/projetos-especiais/gente-que-cuida/" class="hoverImage">
            Historia do Dia
          </a>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h3 style={{textAlign: "center"}}>Desafio TIVIT</h3>

        <h4>Contexto</h4>
        <p style={{textAlign: "justify"}}>
          A evolução da nossa capacidade computacional nos permite processar
          grandes volumes de dados. No entanto, é fundamental que essas
          informações sejam acessadas de forma clara, fácil, acessível e segura.
          Assim, promovemos meios para que nossos clientes tenham insights
          acerca de seus negócios e rapidamente tomem decisões estratégicas
          importantes. Avisualização dos dados faz parte do nosso dia-a-dia na
          Tivit. Ainda que softwares processem dados e as APIs (Application
          Programming Interfaces) nos permitam acessar esses dados, muitas vezes
          é necessária adaptação e manipulação dessas informações para que
          possamos visualizá-las e assim trazer o impacto desejado para nossos
          clientes.
        </p>
        <br />
        <h4>O desafio</h4>
        <p style={{textAlign: "justify"}}>
          Com a evolução da Covid-19 no mundo, uma empresa especializada na
          distribuição de materiais hospitalares precisa ter algumas informações
          sobre os casos para tomadas de decisões estratégicas. O desafio
          consiste em disponibilizar informações de uma API Rest em um
          dashboard, permitindo o acesso real-time dos dados (ou o mais próximo
          possível disso) A documentação dessa API encontra-se em
          https://corona.lmao.ninja/ Para ajudar vocês nessa missão, o time de
          UX (User Experience) elaborou junto ao cliente um protótipo contendo o
          fluxo e as principais informações que devem estar nesse dashboard. O
          protótipo encontra-se em https://xd.adobe.com/view/
          cb04332e-7e60-403b-7719-9ef8c05bc981-bd35/ (Pedir a senha) O objetivo
          de vocês é implementar esse protótipo usando dados da API fornecida.
          Não se esqueçam dos amiguinhos(as) do mobile! Sintam-se livres para
          fazer as melhorias que julgarem necessárias. Na construção da
          interface, sugerimos também utilizar o React com o framework
          Material-UI pois é o que utilizamos no nosso dia-a-dia, mas fiquem à
          vontade para utilizar outra ferramenta :){" "}
        </p>
        <h4>Informações do dashboard</h4>
        <p style={{textAlign: "justify"}}>
          1. Os quadrinhos tem as informações de número de casos, número de
          mortes, número de infectados recuperados e data da última atualização
          destes dados.
          <br />
          2. A tabela tem as informações dos N países com maior numero de casos.
          <br />
          3. O gráfico em barras tem as informações do número de casos por
          continente.
          <br />
          4. O filtro atualiza os dados da tabela e do gráfico de acordo com o
          que o cliente escolher: número de casos ou o número de mortes ou o
          número de infectados recuperados.
          <br />
          5. As informações devem ser atualizadas constantemente, garantindo o
          conceito de real-time e devem acontecer em background, ou seja, sem a
          ação do usuário.
        </p>
      </TabPanel>
    </div>
  );
}

