import "@/styles/form.css";
import data from "@p/other/options.json";
import Link from "next/link";

export const TextField = ({
    label,
    id,
    placeholder = "",
    classes = "",
    input_classes = "",
    required = false,
    password = false,
    min = 0,
    max = Infinity,
}) => {
    return (
        <div
            className={`form-control w-full max-w-xs xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <input
                type={password ? "password" : "text"}
                placeholder={placeholder}
                className={`field input input-bordered w-full max-w-xs pl-2  ${input_classes}`}
                id={id}
                name={id}
                required={required}
                minLength={min}
                maxLength={max}
            />
        </div>
    );
};

export const TextAreaField = ({
    label,
    id,
    placeholder = "",
    classes = "",
    required = false,
}) => {
    return (
        <div
            className={`form-control w-full max-w-sm xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <textarea
                placeholder={placeholder}
                className="field input input-bordered h-[108px] w-full max-w-sm px-4 py-1 pl-2"
                rows={4}
                id={id}
                name={id}
                required={required}
            />
        </div>
    );
};

export const EmailField = ({
    label,
    id,
    placeholder = "",
    classes = "",
    required = false,
}) => {
    return (
        <div
            className={`form-control w-full max-w-xs xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <input
                type="email"
                placeholder={placeholder}
                className="field input input-bordered w-full max-w-xs pl-2"
                id={id}
                name={id}
                required={required}
            />
        </div>
    );
};

export const DateField = ({ label, id, classes = "", required = false }) => {
    return (
        <div
            className={`form-control w-full max-w-xs xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <input
                type="date"
                className="field input input-bordered w-full max-w-xs pl-2"
                id={id}
                name={id}
                required={required}
            />
        </div>
    );
};

export const CountryField = ({
    label,
    field_id,
    classes = "",
    required = false,
}) => {
    const array = data.nations;
    return (
        <div
            className={`form-control w-full max-w-xs xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <select
                className="field input input-bordered w-full max-w-xs pl-2"
                id={field_id}
                name={field_id}
                required={required}
            >
                {array.map((nation) => (
                    <option value={nation.id}>{nation.display}</option>
                ))}
            </select>
        </div>
    );
};

export const CheckField = ({ label, id, classes = "", required = false }) => {
    return (
        <div
            className={`form-control w-full max-w-lg flex-row pt-3 ${classes}`}
        >
            <input
                type="checkbox"
                id={id}
                name={id}
                className="checkbox"
                required={required}
            />
            <label
                className={`label-text-2 label-text text-base xs:text-sm ${
                    required ? "asterisk" : ""
                }`}
            >
                {label}
            </label>
        </div>
    );
};

export const PrivacyCheckField = ({ id, classes = "", required = false }) => {
    return (
        <div
            className={`form-control w-full max-w-lg flex-row pt-3 ${classes}`}
        >
            <input
                type="checkbox"
                id={id}
                name={id}
                className="checkbox"
                required={required}
            />
            <label
                className={`label-text-2 label-text pl-3 text-base xs:text-sm ${
                    required ? "asterisk" : ""
                }`}
            >
                Selezionando la presente casella dichiaro di aver preso visione
                dell’
                <Link className="underline" href="/privacy">
                    informativa sul trattamento dei dati personali
                </Link>{" "}
                e di esprimere il mio consenso al trattamento dei medesimi ai
                sensi del D.Lgs. n. 196/2003.
            </label>
        </div>
    );
};

export const ZampacyCheckField = ({ id, classes = "", required = false }) => {
    return (
        <div
            className={`form-control w-full max-w-lg flex-row pt-3 ${classes}`}
        >
            <input
                type="checkbox"
                id={id}
                name={id}
                className="checkbox"
                required={required}
            />
            <label
                className={`label-text-2 label-text pl-3 text-base xs:text-sm ${
                    required ? "asterisk" : ""
                }`}
            >
                Selezionando la presente casella dichiaro di aver preso visione
                della{" "}
                <Link className="underline" href="/zampacy">
                    Zampacy Policy
                </Link>{" "}
                e di esprimere il mio consenso.
            </label>
        </div>
    );
};

export const FileField = ({
    label,
    id,
    classes = "",
    input_classes = "",
    required = false,
    onChange = null,
}) => {
    return (
        <div
            className={`form-control w-full max-w-xs xs:max-w-[9rem] ${classes}`}
        >
            <label className="label">
                <span
                    className={`label-text-2 label-text text-base xs:text-sm ${
                        required ? "asterisk" : ""
                    }`}
                >
                    {label}
                </span>
            </label>
            <input
                type="file"
                className={`field file-input input file-input-accent input-bordered w-full max-w-xs rounded pl-2 ${input_classes}`}
                id={id}
                name={id}
                required={required}
                onChange={onChange}
            />
        </div>
    );
};
