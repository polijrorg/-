import { TextInput } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";

export const Wrapper = styled.Pressable`
  ${({ theme, width, dimmed }) => css`
    width: ${width ? `${width}px` : `100%`};
    padding: 16px;
    height: 56px;
    background-color: ${theme.colors.white};

    border: 1px solid ${theme.colors.gray};
    border-radius: 4px;
    overflow: hidden;

    opacity: ${dimmed ? 0.4 : 1};
  `}
`;

export const ModalWrapper = styled.Pressable`
  width: 100%;
  height: 100%;

  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const OptionsWrapper = styled.View`
  width: 80%;
  max-height: 232px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const ScrollWrapper = styled.ScrollView``;

export const Option = styled.TouchableHighlight.attrs(({ theme }) => ({
  underlayColor: `${theme.colors.ligth_gray}`,
}))`
  width: 100%;
  padding: 16px;
`;

export const OptionText = styled.Text`
  font-family: ${({ theme }) => theme.font.Montserrat};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const ContentButton = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LabelWrapper = styled.View`
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.font.Montserrat};
  color: ${({ theme }) => theme.colors.typograph.gray};
`;

export const Input = styled(TextInput)`
  width: 100%;
`;
