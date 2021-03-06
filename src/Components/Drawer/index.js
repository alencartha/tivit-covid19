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
            label="Hist??rias que Inspiram"
            icon={<FavoriteIcon style={{ color: '#d11507' }}/>}
            {...a11yProps(1)}
          />
          <Tab label="Conhe??a +" icon={<HelpIcon style={{ color: '#d11507' }}/>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          <h3 style={{textAlign: "center"}}>Documenta????o Oficial da OMS</h3>
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
            Organiza????o Pan-Americana de Sa??de - OPAS
          </a>
          <br />
          <br />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h2 style={{textAlign: "center"}}>Conhe??a hist??rias de pessoas que cuidam!</h2>
          <h4 style={{textAlign: "center"}}>
            Talita atende urg??ncias na sa??de e tamb??m ajuda quem precisa de
            comida
          </h4>
          <p style={{textAlign: "center"}}><img border="0" src="https://historiadodia.com.br/wp-content/uploads/2020/06/des-1-4-400x250.jpg" alt="Foto da Talita"/></p>
          <p style={{textAlign: "justify"}}>
            A pandemia j?? havia chegado ao Brasil. Ela, que ?? t??cnica de
            enfermagem do Samu, atua na linha de frente. Viu a rotina mudar, o
            medo se instalar, o trabalho ficar ainda mais intenso. Nada disso
            foi impeditivo. Talita de Cico, 37 anos, ajuda a salvar vidas e a
            matar a fome. Leva atendimento de urg??ncia, mas, depois, tamb??m
            atende quem precisa de roupas e alimentos. ??? H?? muitas pessoas que
            precisam trabalhar de dia para comer ?? noite. E, agora, est??o sem
            trabalho. Alguns pedem ajuda. Outros s?? oram. A solidariedade se
            desdobra em v??rias formas. Antes da pandemia ela j?? procurava estar
            atenta ao outro. Sempre encontrava uma forma de ajudar uma fam??lia,
            destinando parte do sal??rio para isso. Agora, intensificou o ajudar.
            ??? As pessoas perderam empregos, est??o sem trabalho e entraram em
            necessidade. Uma das coisas boas do meu trabalho ?? poder fazer algo
            a mais. Acolher uma m??e que vive uma dor, orientar uma mulher que
            sofre viol??ncia dom??stica. N??o precisa parar ali. No tempo livre ???
            que ?? bem pouco! ??? ainda criou uma lista de transmiss??o no Whatsapp
            para compartilhar orienta????es de sa??de, formas de evitar o cont??gio
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
            H?? 20 anos, ela ?? parte do setor de psicologia do Hospital das
            Cl??nicas de Ribeir??o Preto ??? Unidade de Emerg??ncia. Hoje, coordena a
            equipe, formada por 10 profissionais. Quando entrou, entretanto, mal
            se sabia qual era a fun????o de um psic??logo em ambiente hospitalar. A
            primeira psic??loga a atuar no hospital chegou em 1998 e Ana veio
            dois anos depois, como a segunda profissional de toda a institui????o.
            Ajudou o setor a crescer, mostrando sua import??ncia. Aos poucos, o
            acolhimento psicol??gico passou a ser solicitado por mais e mais,
            presente hoje em todos os setores. ??? Na psicologia, a gente trabalha
            com a palavra, mas mais ainda com a escuta. Ser ouvido ?? um
            privil??gio de poucos. N??s abra??amos escutando e at?? com os olhos,
            porque h?? pacientes que n??o conseguem falar. ?? a presen??a, o olhar.
            Esse trabalho de acolhimento est?? presente, inclusive, nos
            planejamentos estruturais. O psic??logo acompanha a evolu????o do
            paciente, participa das discuss??es de caso, ?? parte. ???Bom dia! Eu
            sou a Ana, da UE, mas n??o aconteceu nada. S?? estou ligando para
            saber como voc??s est??o. O seu filho est?? na UE, sendo cuidado pela
            equipe. Estou ligando para conhecer a senhora. N??o ?? um momento
            f??cil??????. ?? preciso carinho em cada palavra. Abordar por telefone uma
            m??e que internou seu filho com Covid-19 n??o ?? tarefa de dois
            minutos. Entre as primeiras palavras, Ana vai logo se explicando. ???
            Algumas pessoas j?? passam mal s?? de receber a liga????o do hospital. ??
            preciso avisar que est?? tudo bem. Que o motivo da liga????o ?? outro.
            Antes da pandemia, esse contato era feito pessoalmente, com a
            fam??lia presente no hospital. Ao longo de duas d??cadas de atua????o,
            uma das conquistas de Ana foi deixar os familiares cada vez mais
            part??cipes no tratamento, at?? mesmo na UTI. Na UE, os hor??rios de
            visita eram estendidos, pela compreens??o de que o contato entre o
            paciente e as pessoas queridas ?? uma importante frente no
            tratamento. A fam??lia ?? uma ???parceira???, como ela diz. ??? Para
            resgatar o paciente, precisamos resgatar a vida dele l?? fora. E a
            fam??lia ?? o elo mais importante dessa vida.
          </p>
          <br />
          <br />
          <p style={{textAlign: "justify"}} >
          Conhe??a mais em: 
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
          A evolu????o da nossa capacidade computacional nos permite processar
          grandes volumes de dados. No entanto, ?? fundamental que essas
          informa????es sejam acessadas de forma clara, f??cil, acess??vel e segura.
          Assim, promovemos meios para que nossos clientes tenham insights
          acerca de seus neg??cios e rapidamente tomem decis??es estrat??gicas
          importantes. Avisualiza????o dos dados faz parte do nosso dia-a-dia na
          Tivit. Ainda que softwares processem dados e as APIs (Application
          Programming Interfaces) nos permitam acessar esses dados, muitas vezes
          ?? necess??ria adapta????o e manipula????o dessas informa????es para que
          possamos visualiz??-las e assim trazer o impacto desejado para nossos
          clientes.
        </p>
        <br />
        <h4>O desafio</h4>
        <p style={{textAlign: "justify"}}>
          Com a evolu????o da Covid-19 no mundo, uma empresa especializada na
          distribui????o de materiais hospitalares precisa ter algumas informa????es
          sobre os casos para tomadas de decis??es estrat??gicas. O desafio
          consiste em disponibilizar informa????es de uma API Rest em um
          dashboard, permitindo o acesso real-time dos dados (ou o mais pr??ximo
          poss??vel disso) A documenta????o dessa API encontra-se em
          https://corona.lmao.ninja/ Para ajudar voc??s nessa miss??o, o time de
          UX (User Experience) elaborou junto ao cliente um prot??tipo contendo o
          fluxo e as principais informa????es que devem estar nesse dashboard. O
          prot??tipo encontra-se em https://xd.adobe.com/view/
          cb04332e-7e60-403b-7719-9ef8c05bc981-bd35/ (Pedir a senha) O objetivo
          de voc??s ?? implementar esse prot??tipo usando dados da API fornecida.
          N??o se esque??am dos amiguinhos(as) do mobile! Sintam-se livres para
          fazer as melhorias que julgarem necess??rias. Na constru????o da
          interface, sugerimos tamb??m utilizar o React com o framework
          Material-UI pois ?? o que utilizamos no nosso dia-a-dia, mas fiquem ??
          vontade para utilizar outra ferramenta :){" "}
        </p>
        <h4>Informa????es do dashboard</h4>
        <p style={{textAlign: "justify"}}>
          1. Os quadrinhos tem as informa????es de n??mero de casos, n??mero de
          mortes, n??mero de infectados recuperados e data da ??ltima atualiza????o
          destes dados.
          <br />
          2. A tabela tem as informa????es dos N pa??ses com maior numero de casos.
          <br />
          3. O gr??fico em barras tem as informa????es do n??mero de casos por
          continente.
          <br />
          4. O filtro atualiza os dados da tabela e do gr??fico de acordo com o
          que o cliente escolher: n??mero de casos ou o n??mero de mortes ou o
          n??mero de infectados recuperados.
          <br />
          5. As informa????es devem ser atualizadas constantemente, garantindo o
          conceito de real-time e devem acontecer em background, ou seja, sem a
          a????o do usu??rio.
        </p>
      </TabPanel>
    </div>
  );
}

