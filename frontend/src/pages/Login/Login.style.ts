import styled from "styled-components";
import { View, Text, Image, Button } from "react-native";

export const Container = styled(View)`
  justify-content: "center";
  align-items: "center";
  padding: 20;
  padding-top: 50;
`;

export const Logo = styled(Image)`
  height: 200;
  width: 300;
  margin-top: 20;
  margin-bottom: 20;
  object-fit: "cover";
`;

export const TestRegister = styled(Text)`
  font-size: 15;
  margin-top: 10;
  margin-bottom: 10;
  font-weight: 500;
  color: "#abb8c3";
`;

export const NavButtonText = styled(Text)`
  font-size: 18;
  font-weight: 500;
  color: "#2e64e5";
`;

export const NavButton = styled(Button)`
  margin-top: 15
`;

export const ForgotButton = styled(Button)`
  margin-top: 15;
`;
