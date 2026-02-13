import React from "react";

type FormProps = {
  getData: (e: React.SubmitEvent<HTMLFormElement>) => void;
  val: string;
  updateVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ getData, val, updateVal }: FormProps) => {
  return (
    <section className="p-2 text-center space-x-2">
      <form onSubmit={getData}>
        <input
          type="text"
          className="text-white bg-transparent border-2 border-white placeholder:font-bold placeholder:text-white p-2 rounded-xl placeholder:text-xl outline-none max-md:text-center"
          placeholder="Enter Location"
          value={val}
          onChange={updateVal}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-orange-400 rounded-md p-1 text-white ml-1 cursor-pointer active:scale-75 duration-200"
        />
      </form>
    </section>
  );
};

export default Form;
