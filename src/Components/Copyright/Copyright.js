import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center"   style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>
        Desenvolvedoras: {" "}
        <Link color="inherit" href="https://github.com/edilenefern" style={{ fontWeight:'bold' }}>
          Edilene Fernandes
        </Link>{", "}
        <Link color="inherit" href="https://github.com/Juliane-C" style={{ fontWeight:'bold' }}>
          Juliane Cristina
        </Link>{", "}
        <Link color="inherit" href="https://github.com/luciana-pereira" style={{ fontWeight:'bold' }}>
          Luciana Pereira
        </Link>{", "}
        <Link color="inherit" href="https://github.com/MairaSoares" style={{ fontWeight:'bold' }}>
          Mairã Soares
        </Link>{", "}
        <Link color="inherit" href="https://github.com/alencartha" style={{ fontWeight:'bold' }}>
          Thaís Alencar
        </Link>{"."}
      </Typography>
    );
  }

export default Copyright;