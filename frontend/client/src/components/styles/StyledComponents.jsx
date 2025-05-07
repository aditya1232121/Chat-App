import { Skeleton, keyframes, styled } from "@mui/material";
import { grayColor, matBlack } from "../../constants/color";
import { Link } from "react-router-dom";

// Hidden input element for accessibility
const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

// Styled React Router Link with hover and active styles
// theme
const StyledLink = styled(Link)(() => ({
  
  textDecoration: "none",
  color: "inherit",
  display: "block",

  "&:hover > div": {
    backgroundColor: "#e0e0e0", // Light grey on hover
    cursor: "pointer",
  },

  "&:active > div": {
    backgroundColor: "#ffebee", // Red-ish when clicked or right-clicked
  },
}));

// Styled input for message or text entry
const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
`;

// Search field style
const SearchField = styled("input")`
  padding: 1rem 2rem;
  width: 20vmax;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  background-color: ${grayColor};
  font-size: 1.1rem;
`;

// A curved button
const CurveButton = styled("button")`
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${matBlack};
  color: white;
  font-size: 1.1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

// Animation for bouncing skeleton loader
const bounceAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.5); }
  100% { transform: scale(1); }
`;

// Skeleton loader with bounce effect
const BouncingSkeleton = styled(Skeleton)(() => ({
  animation: `${bounceAnimation} 1s infinite`,
}));

// ✅ Correct single export
export {
  CurveButton,
  SearchField,
  InputBox,
  StyledLink,
  VisuallyHiddenInput,
  BouncingSkeleton,
};
