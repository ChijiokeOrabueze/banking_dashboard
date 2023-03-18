import { useState } from "react";
import styled from "styled-components";
import Select from "../../../components/Select";
import { FlexApart, FlexRow } from "../../../styles";
import Plot from "../components/Plot";


const Container = styled.div`
    width: 352.1px;
    height: 259.85px;

    .savings {
        font-family: 'Gilroy-Medium';
        font-size: 10.2375px;
        line-height: 12px;
        color: #141736;
    }

    .analysis {
        font-family: 'Gilroy-Bold';
        font-size: 10.2375px;
        line-height: 12px;
        color: #7C8DA7;
    }

    .form-select {
        width: 59.96px;
        height: 26.33px;
        border-radius: 12.9443px;
        border: 0.73125px solid #E5E9F4;

    }


`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 329.14px;

    h2 {
        font-family: 'Gilroy-Medium';
        font-size: 16.0875px;
        line-height: 19px;
        color: #141736;
    }

`

const MoneyFlow = () => {
    const [value, setValue] = useState("");

    return (
        <Container>
            <Header>
                <FlexApart>
                    <h2>Money Flow</h2>
                    <FlexRow gap={19}>
                        <img src="/assets/dashboard/wiggly-gray.svg" alt="" />
                        <img src="/assets/dashboard/sort.svg" alt="" />
                    </FlexRow>
                </FlexApart>
                <FlexApart>
                    <FlexRow gap={19}>
                        <FlexRow gap={8}>
                            <img src="/assets/dashboard/wiggly-btn.svg" alt="" />
                            <h2 className="savings">Savings</h2>
                        </FlexRow>
                        <FlexRow gap={8}>
                            <img src="/assets/dashboard/wiggly-blue.svg" alt="" />
                            <h2 className="analysis">+23,9%</h2>
                        </FlexRow>
                    </FlexRow>
                    <Select options={["Week", "Month"]} value={value} name="select"
                     handleChange={(e)=>{setValue(e.target.value)}}/>
                </FlexApart>

            </Header>

            <Plot />

        </Container>
    )
}


export default MoneyFlow;