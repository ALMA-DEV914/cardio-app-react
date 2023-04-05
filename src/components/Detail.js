import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/meditation.png";
import TargetImage from "../assets/icons/exercises (1).png";
import EquipmentImage from "../assets/icons/fitness.png";
import { Container } from "@mui/system";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <div className="box-detail">
      <Container className="detail">
        <Stack className="gif">
          <img
            src={gifUrl}
            alt={name}
            loading="lazy"
            className="detail-image"
          />
        </Stack>
        <Stack className="detail-info">
          <Typography className="title">{name}</Typography>
          <Typography className="text">
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>{name}</span> bup is
            one of the best <br /> exercises to target your {target}. It will
            help you improve your <br /> mood and gain energy.
          </Typography>
          <br></br>
          {extraDetail?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button className="detail-btn">
                <img
                  src={item.icon}
                  alt={bodyPart}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography className="btn-name">{item.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Detail;
