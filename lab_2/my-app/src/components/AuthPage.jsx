import { Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router";
import { RegForm } from "./forms/RegForm";
import { LoginForm } from "./forms/LoginForm";


export default function AuthPage() {
  const [isRegForm, setStateLog] = useState(false);

  return (
    <Box>
      {isRegForm ? <RegForm /> :
        <LoginForm />
      }
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Box mt={1}>
          <Link onClick={() => {
            setStateLog(!isRegForm)
          }}> {isRegForm ? 'Do have an account? Sign in' : "Don't have an account? Sign Up"} </Link>

        </Box>
      </Box>
    </Box>
  )
}

