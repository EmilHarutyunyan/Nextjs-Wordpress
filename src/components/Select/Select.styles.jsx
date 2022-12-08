import styled from "styled-components";

export const SelectWrap = styled.div`
  width: 82px;
  height: 25px;
  background-color: #080e16;
  option {
    padding: 3px 20px 5px 9px;
  }
`;
export const SelectHeader = styled.div`
	display:flex;
	align-items: center;

		`;
export const SelectTitle = styled.span`
  font-size: 14px;
  color: #f9f9f9;
  padding: 3px 20px 5px 9px;
`;
export const ImgWrap = styled.div`
  font-size: 0;
`;

export const SelectBody = styled.div`
  background-color: #080e16;
  height: 0px;
  overflow: hidden;
  transition: all 0.3s linear;
  visibility: visible;
  p {
    padding: 3px 10px 5px 9px;
  }
`;
export const SelectItem = styled.div`
  display: flex;

  cursor: pointer;
  :first-child {
    padding-top: 8px;
  }
  :last-child {
    margin-bottom: 0;
    padding-bottom: 8px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 30px;
    max-height: 30px;
  }
  p {
    font-size: 14px;
    padding-left: 8px;
  }
`;
export const SelectCustom = styled.div`
  background-color: #080e16;
  width: 100%;
`;
