import React from "react"

// Material UI
import { Container, Typography, Box } from "@material-ui/core"

// Components
import { Title } from "components/layout"

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Title />
      <Box mb={2}>
        <Typography variant="h1">Privacy Policy</Typography>
      </Box>
      <Typography variant="body1" paragraph={true}>
        <strong>Effective date: </strong>November 21, 2019 FreeFrom (“us”, “we”,
        or “our”) operates the Compensation Compass (hereinafter referred to as
        the “Site”).
        <br />
        <br />
        This page informs you of our policies regarding the collection, use and
        disclosure of personal data when you use our Site and the choices you
        have associated with that data.
        <br />
        <br />
        Please read this policy carefully to understand our policies and
        practices regarding your information and how we will treat it. By
        accessing or using this Site, you agree to this Privacy Policy.
      </Typography>
      <Box mt={4} mb={2}>
        <Typography variant="h2">Definitions</Typography>
      </Box>
      <Typography variant="body1" paragraph={true}>
        <strong>Site</strong>
        <br />
        The site is the Compensation Compass operated by FreeFrom.
        <br />
        <br />
        <strong>Personal Data</strong>
        <br />
        Personal Data means data about a living individual who can be identified
        from that data (or from that and other information in our possession or
        likely to come into our possession).
        <br />
        <br />
        <strong>Usage Data</strong>
        <br />
        Usage Data is data collected automatically either generated by the use
        of the Site or from the Site infrastructure itself (for example, the
        duration of a page visit).
        <br />
        <br />
        <strong>Cookies</strong>
        <br />
        Cookies are small files stored on your device (computer or mobile
        device).
      </Typography>
      <Box mt={4} mb={2}>
        <Typography variant="h2">
          Information We Collect About You and How We Collect It
        </Typography>
      </Box>
      <Typography variant="body1" paragraph={true}>
        We collect different types of information from and about users of our
        Site.
      </Typography>
      <Box mt={4} mb={2}>
        <Typography variant="h2">
          Information We Collect About You and How We Collect It
        </Typography>
      </Box>
      <Typography variant="body1" paragraph={true}>
        We collect different types of information from and about users of our
        Site.
      </Typography>
      <Box mt={2} mb={2}>
        <Typography variant="h3">Types of Data Collected</Typography>
      </Box>
      <Box mt={2} mb={2}>
        <Typography variant="h3">PERSONAL DATA</Typography>
      </Box>
      <Typography></Typography>
    </Container>
  )
}

export default PrivacyPolicy
