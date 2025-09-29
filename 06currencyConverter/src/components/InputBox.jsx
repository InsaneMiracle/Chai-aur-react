import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
  const amountId = useId();

    return (
        <div className={`bg-white p-3 w-full rounded-lg text-sm flex text-black  ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-6 px-10" 
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount ?? ""}
                    onChange={e=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className=" cursor-pointer outline-none select select-ghost"
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={e=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                        {currencyOptions.map((currency)=>(
                          <option key={currency} value={currency}>
                            {currency}
                          </option>
                        ) )}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
