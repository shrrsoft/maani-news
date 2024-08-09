"use client";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function NewPost() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <form className="flex flex-col items-start pr-2" action="">
        <label className="m-1" htmlFor="">
          عنوان
        </label>
        <input
          className="bg-slate-300 w-full outline-none border rounded-md border-slate-800"
          type="text"
        />
        <label className="mb-1 mt-10" htmlFor="">
          آدرس تصویر
        </label>
        <input
          className="bg-slate-300 w-full outline-none border rounded-md border-slate-800 mb-10"
          type="text"
        />
        <label className="m-1" htmlFor="">
          متن
        </label>
      </form>
      <Editor
        apiKey="i08phbo8wye93ngwj6qwzhjks4xx4ub0gj6ahcm4iitr6mpg"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family: Vazirmatn, Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button
        className="bg-green-700 text-white rounded w-52 pr-16 text-center flex mx-auto m-5 py-2"
        onClick={log}>
        ارسال مطلب
      </button>
    </>
  );
}
