import React from "react";
import { ImageProps } from "antd";
import { Image as AntdImage } from "antd";

export const Image = (props: ImageProps & { list?: string[] }) => {
  const list = Array.isArray(props.list) ? props.list : [props.src];
  return (
    <>
      {list.map((src, index) => (
        <AntdImage
          wrapperStyle={{ marginRight: 5, marginBottom: 5 }}
          key={index}
          width={300}
          src={src}
          {...props}
        />
      ))}
    </>
  );
};
