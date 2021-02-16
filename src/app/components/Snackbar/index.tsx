import * as React from "react";
import styled from "styled-components";
import { Dimensions, Text, View } from "react-native";

type Props = {
  message: string;
};

const Snackbar: React.FC<Props> = ({ message }) => {
  return (
    <SnackbarContainer>
      <SnackbarText>{message}</SnackbarText>
    </SnackbarContainer>
  );
};

export default Snackbar;

const SnackbarContainer = styled(View)`
  background: #ffccff;
  width: ${Dimensions.get("window").width - 60}px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

const SnackbarText = styled(Text)`
  font-size: 20px;
`;
