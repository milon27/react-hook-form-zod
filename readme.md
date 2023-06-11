# zod with react hook form basic setup

```tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MyInputWithRef } from "./components/MyInput";

const formSchema = z
  .object({
    title: z.string().trim().min(2),
  })
  .refine(
    (data) => {
      if (data.title == "milon") {
        return false;
      } else {
        return true;
      }
    },
    { message: "you can;t put milon here.", path: ["title"] }
  );

type IFormInput = z.infer<typeof formSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: zodResolver(formSchema),
  });

  const sub = (input: IFormInput) => {
    console.log(input);
  };

  return (
    <div>
      <MyInputWithRef
        id="a"
        label="enter title"
        {...register("title")}
        error={errors.title?.message}
        // {...register("title", {
        //   required: "enter some value....",
        //   minLength: {
        //     value: 3,
        //     message: "enter 3 input....",
        //   },
        // })}
      />
      <button
        onClick={() => {
          handleSubmit(sub)();
        }}
      >
        click me
      </button>
    </div>
  );
}
```
