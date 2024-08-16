import { UserInfoState } from "../util/user-input";

interface Props {
    userInfo: UserInfoState;
    onChange: (key: string, value: string) => void
}

export const UserInput = ({ userInfo, onChange }: Props) => {
    return (
        <section id="user-input">
            <div className={"input-group"}>
                <p>
                    <label htmlFor="initial-investment">Initial Investment:</label>
                    <input
                        type="number"
                        id="initial-investment"
                        value={userInfo.initialInvestment}
                        onChange={(e) => onChange("initialInvestment", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment:</label>
                    <input
                        type="number"
                        id="annual-investment"
                        value={userInfo.annualInvestment}
                        onChange={(e) => onChange("annualInvestment", e.target.value)}
                    />
                </p>
            </div>
            <div className={"input-group"}>
                <p>
                    <label htmlFor="expected-return">Expected Return:</label>
                    <input
                        type="number"
                        id="expected-return"
                        value={userInfo.expectedReturn}
                        onChange={(e) => onChange("expectedReturn", e.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Duration:</label>
                    <input
                        type="number"
                        id="duration"
                        value={userInfo.duration}
                        onChange={(e) => onChange("duration", e.target.value)}
                    />
                </p>
            </div>
        </section>
    );
};
