// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
   console.log(req.body, "wwwwwwwwwww")

    if (!req?.body) {
      return res.status(400).json({ message: "Name is required." });
    }

    res.status(200).json({ message: `Hello, !` });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
