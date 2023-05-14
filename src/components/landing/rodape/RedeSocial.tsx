import React from "react";
import Link from "next/link";

interface RedeSocialProps {
  icone: any;
  url: string;
}

export default function RedeSocial(props: RedeSocialProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="p-1 mr-3 transition-all duration-200 rounded-lg cursor-pointer bg-zinc-800 hover:scale-105">
        {React.cloneElement(props.icone, {
          size: 35,
          strokeWidth: 1,
          className: "text-indigo-400",
        })}
      </div>
    </Link>
  );
}
