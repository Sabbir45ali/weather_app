import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Weather from "./Weather";

export default function Heading(props) {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h1">Weather Application</Typography>
      <Typography>
        <Weather
          weather={props.weather}
          search={props.search}
          setSearch={props.setSearch}
          searchPressed={props.searchPressed}
        />
      </Typography>
    </Card>
  );
}
