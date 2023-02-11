
import styles from "../styles/Input.module.scss";
const Input = ({ id, value, setValue, labelName, type, srcImage, ...props }) => {
  return (
    <div className="mb-10">
      <div
        className={`flex flex-row items-center gap-2 ${styles.containerLabel}`}
      >
        <img src={srcImage} alt={id} />
        <label
          htmlFor={id}
          className={`font-firaCode text-whiteColor text-sm ${styles.label}`}
        >
          {labelName}
        </label>
      </div>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        autoComplete="off"
        className={`mt-3 w-full box-border pl-1 text-whiteColor font-firaCode tracking-wide text-xs sm:text-base ${styles.input}`}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
