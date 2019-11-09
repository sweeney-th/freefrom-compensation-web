import React from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import Compass from "../../../images/general/compass.png"

// Material UI
import {
  Box,
  Button,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core"

// Components
import StateQuestion from "./StateQuestion"

const Quiz = ({ quiz }) => {
  if (!quiz.agreement) {
    return <Redirect to="/" />
  }

  return (
    <Container maxWidth="lg">
      <Box display={"flex"} alignItems={"center"} mb={2}>
        <img src={Compass} alt={"Compensation compass logo"} width="100"/>

        <Box ml={2}>
          <Typography variant={"h1"}>Compensation Compass</Typography>
        </Box>
      </Box>
      {quiz.question == 0 ? <StateQuestion /> : null}

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mt={4}
      >
        <Button
          color="primary"
          disabled={quiz.question == 0}
          // TODO: write an onChange method that goes to the previous question
        >
          Back
        </Button>

        <Button
          color="primary"
          disabled={quiz.question == 6} // TODO: figure out the right condition here
          // TODO: write an onChange method that goes to the next question
        >
          Next
        </Button>
      </Box>
    </Container>
  )
}

Quiz.propTypes = {
  quiz: PropTypes.object,
}

const mapStateToProps = state => ({
  quiz: state.quiz,
})

export default connect(
  mapStateToProps,
)(Quiz)