import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { Grid, Typography } from "@mui/material";

const fixedCheckpoints = [
  { name: "Stage 1", coordinates: { x: 10, y: 10 }, status: "ember" },
  { name: "Stage 2", coordinates: { x: 45, y: 10 }, status: "" },
  { name: "Stage 3", coordinates: { x: 85, y: 10 }, status: "" },
  { name: "Stage 4", coordinates: { x: 60, y: 42 }, status: "" }, // Adjusted coordinates for the 4th circle
  { name: "Stage 5", coordinates: { x: 45, y: 42 }, status: "" },
  { name: "Stage 6", coordinates: { x: 10, y: 42 }, status: "" },
  { name: "Stage 7", coordinates: { x: 10, y: 75 }, status: "" },
  { name: "Stage 8", coordinates: { x: 45, y: 75 }, status: "" },
  { name: "Settled", coordinates: { x: 84, y: 75 }, status: "" },
];

const Stepper = () => {
  const [checkpoints, setCheckpoints] = useState(fixedCheckpoints);
  const [activeStep, setActiveStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showAward, setShowAward] = useState(true);
  const [confettiDuration, setConfettiDuration] = useState(5000);

  useEffect(() => {
    if (activeStep === checkpoints.length) {
      setShowConfetti(true);
      setShowAward(true);
      Swal.fire({
        title: "Congratulations!",
        text: "You are at the final stage!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        setShowConfetti(false);
      }, confettiDuration);
    }
  }, [activeStep, checkpoints.length, confettiDuration]);

  const handleStepClick = (step) => {
    if (step === 6) {
      const shouldContinue = window.confirm(
        "Do you wish to continue to Station 7?"
      );
      if (shouldContinue) {
        setActiveStep(step);
      } else {
        setCheckpoints((prevCheckpoints) => {
          const updatedCheckpoints = [...prevCheckpoints];
          updatedCheckpoints.splice(6, 1);
          updatedCheckpoints[6] = {
            name: "Station 7",
            coordinates: { x: 10, y: 75 },
            status: "",
          };
          return updatedCheckpoints;
        });
        setActiveStep(9);
      }
    } else {
      setActiveStep(step);
    }

    setCheckpoints((prevCheckpoints) => {
      return prevCheckpoints.map((checkpoint, index) => {
        if (index < step - 1) {
          return { ...checkpoint, status: "completed" };
        } else if (index === step - 1) {
          return { ...checkpoint, status: "active" };
        } else {
          return checkpoint;
        }
      });
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Current Progress</Typography>
      </Grid>
      <Grid item xs={12}>
        <svg
          style={{
            width: "95%",
            height: "90%",
            marginLeft: "-5px",
            marginTop: "3px",
          }}
        >
          {checkpoints.map((checkpoint, index) => (
            <>
              {index > 0 && (
                <line
                  key={`line-${index}`}
                  className={`line ${
                    checkpoints[index].status === "completed" ? "completed" : ""
                  }`}
                  x1={`${checkpoints[index - 1].coordinates.x}%`}
                  y1={`${checkpoints[index - 1].coordinates.y}%`}
                  x2={`${checkpoint.coordinates.x}%`}
                  y2={`${checkpoint.coordinates.y}%`}
                />
              )}
              <circle
                key={`circle-${index}`}
                cx={`${checkpoint.coordinates.x}%`}
                cy={`${checkpoint.coordinates.y}%`}
                r="25"
                stroke="#000"
                strokeWidth="2"
                fill={
                  checkpoint.status === "completed" ? "white" : "primary"
                }
                onClick={() => handleStepClick(index + 1)}
              />
              <text
                key={`text-${index}`}
                x={`${checkpoint.coordinates.x}%`}
                y={`${checkpoint.coordinates.y}%`}
                textAnchor="middle"
                fontSize="12"
                fill={checkpoint.status === "completed" ? "primary" : "white"}
                onClick={() => handleStepClick(index + 1)}
              >
                {index + 1}
              </text>
            </>
          ))}
        </svg>
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Stepper;
