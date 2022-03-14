import React, { useState } from "react";
import { Modal } from "react-native";
import Arrow from "../../assets/arrow.svg";
import { MotiView } from "@motify/components";
import * as S from "./styles";

type DropDownProps = {
  label: string;
  value: string;
  options: string[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
  width?: number;
  disableSelectAll?: boolean;
  editable?: boolean;
};

const DropDown: React.FC<DropDownProps> = ({
  label,
  value,
  onChange,
  options,
  width,
  disableSelectAll,
  editable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState(value.toString() || "Todos");

  const handleOnChange = (option) => {
    onChange(option);
    setSelect(option ? option.toString() : "Todos");
    setIsOpen(false);
  };

  return (
    <S.Wrapper
      width={width}
      onPress={() => editable && setIsOpen(!isOpen)}
      dimmed={!editable}
    >
      <Modal
        animationType="fade"
        visible={isOpen}
        statusBarTranslucent
        transparent
        onRequestClose={() => setIsOpen(false)}
      >
        <S.ModalWrapper onPress={() => setIsOpen(false)}>
          <S.OptionsWrapper>
            <S.ScrollWrapper showsHorizontalScrollIndicator>
              {!disableSelectAll && (
                <S.Option
                  onPress={() => {
                    if (Number.isInteger(value)) handleOnChange(0);
                    else handleOnChange("");
                  }}
                >
                  <S.OptionText>Todos</S.OptionText>
                </S.Option>
              )}

              {options.map((option) => (
                <S.Option key={option} onPress={() => handleOnChange(option)}>
                  <S.OptionText>{option}</S.OptionText>
                </S.Option>
              ))}
            </S.ScrollWrapper>
          </S.OptionsWrapper>
        </S.ModalWrapper>
      </Modal>

      <S.ContentButton>
        <S.LabelWrapper>
          <S.Label numberOfLines={1}>
            {label && `${label}: `} {select}
          </S.Label>
        </S.LabelWrapper>

        <MotiView
          transition={{ type: "timing", duration: 150 }}
          animate={{ rotate: isOpen ? "180deg" : "0deg" }}
        >
          <Arrow width={12} height={20} />
        </MotiView>
      </S.ContentButton>
    </S.Wrapper>
  );
};

// da pipoca pro seu pai

export default DropDown;
