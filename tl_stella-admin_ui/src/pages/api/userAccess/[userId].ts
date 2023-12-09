import type { NextApiRequest, NextApiResponse } from "next";

export type UserAccessData = { id: string; tenants: string[] };

const userAccessData: UserAccessData[] = [
  {
    id: "b2a0810d-e97f-4544-ad49-9300530fb920",
    tenants: ["0015f00000DwPWM"],
  },
  {
    id: "8ddeb72b-06e4-4726-87bb-ea398ca23f7c",
    tenants: [
      "0015f00000DwPWN",
      "0015f00000DwPWO",
      "0015f00000DwPWP",
      "0015f00000DwR0i",
    ],
  },
  {
    id: "c9c81e60-8c75-47f4-aeba-d3201b808cb1",
    tenants: ["0015f00000DwPWQ"],
  },
  {
    id: "730ae336-b0a1-481d-b599-464e2f865540",
    tenants: ["0015f00000DwPWR"],
  },
  {
    id: "deed8b61-732c-409f-896b-d2f8b967f88c",
    tenants: [
      "0015f00000DwPWS",
      "0015f00000DwPWT",
      "0015f00000DwPWU",
      "0015f00000DwPWV",
      "0015f00000DwPWW",
    ],
  },
  {
    id: "e7466b00-0500-427b-8267-2adf991f8867",
    tenants: ["0015f00000DwPWN"],
  },
  {
    id: "c0325f21-4702-406c-991d-7a0027463a18",
    tenants: ["0015f00000DwPWO"],
  },
  {
    id: "572e17f8-4be8-4b3d-a604-2e9439bffd88",
    tenants: ["0015f00000DwPWP"],
  },
  {
    id: "2dddc43e-e635-4d3b-ae88-621396fbe3e9",
    tenants: ["0015f00000DwR0i"],
  },
  {
    id: "dd8023c1-6b72-4f3c-af72-b491638df291",
    tenants: ["0015f00000DwPWS"],
  },
  {
    id: "5398d842-0419-4e9b-bd12-02f6c64de5c5",
    tenants: ["0015f00000DwPWT"],
  },
  {
    id: "f3c9768d-1483-42fb-b730-875fe5c91672",
    tenants: ["0015f00000DwPWU"],
  },
  {
    id: "53a125c6-97c9-48d1-bb3d-ef7087c1643b",
    tenants: ["0015f00000DwPWW"],
  },
  {
    id: "84ebfd24-9f18-42f8-b6b1-86e4cdb95411",
    tenants: ["0015f00000DwPWV"],
  },
  {
    id: "8f1a8766-d210-4fc2-8bad-ffba9e9c110b",
    tenants: ["0015f00000DwPWM"],
  },
  {
    id: "29265cca-0d8d-4361-bdc0-1656ca870714",
    tenants: ["0015f00000DwPWQ"],
  },
  {
    id: "9f588f98-0ccf-4f4b-a037-4dc999e7b32b",
    tenants: ["0015f00000DwPWR"],
  },
  {
    id: "e90bf51b-9ce8-4823-a963-e4495bbcd11b",
    tenants: [
      "0015f00000DwPWM",
      "0015f00000DwPWN",
      "0015f00000DwPWO",
      "0015f00000DwPWP",
      "0015f00000DwR0i",
      "0015f00000DwPWQ",
      "0015f00000DwPWR",
      "0015f00000DwPWS",
      "0015f00000DwPWT",
      "0015f00000DwPWU",
      "0015f00000DwPWV",
      "0015f00000DwPWW",
    ],
  },
  {
    id: "67cde6a0-f204-4cff-b59f-38fbc684099e",
    tenants: ["0015f00000NQsWwAAL", "0015f00000NQsXaAAL"],
  },
  {
    id: "d2da9dc5-8aef-4a19-a132-580ddb8e136e",
    tenants: ["0015f00000PUTZKAA5"],
  },
  {
    id: "74c4f5dd-41ae-4061-827e-fe479c3855e9",
    tenants: ["0015f00000PUTZUAA5"],
  },
  {
    id: "908d8457-ec6f-4cd3-a52b-bd142e0b9b24",
    tenants: ["0015f00000PUTZKAA5", "0015f00000PUTZUAA5"],
  },
  {
    id: "c7becd65-28f2-4e9a-9751-1fbe0da727f9",
    tenants: ["0015f00000QogKLAAZ", "0015f00000QogJrAAJ"],
  },
  {
    id: "e979498e-6f97-407d-a49d-ce5414e88240",
    tenants: ["0015f00000QogKLAAZ"],
  },
  {
    id: "9758d8e2-a029-4f7e-a068-a74657c3d004",
    tenants: ["0015f00000QogJrAAJ"],
  },
  {
    id: "6f5878d9-d972-4721-bfe6-430a42875f4b",
    tenants: ["0015f00000NQyYCAA1"],
  },
  {
    id: "0e3754f5-1b61-4db5-9a26-6ed90a2f61ed",
    tenants: ["0015f00000NQyYCAA1"],
  },
  {
    id: "ded91b60-a973-48a8-b7fa-c493f04c16ec",
    tenants: ["0015f00000PUiCvAAL"],
  },
  {
    id: "dbbc257f-dc98-4317-8422-d884182ed32b",
    tenants: ["0015f00000PUiCvAAL"],
  },
  {
    id: "67b38ee7-510e-483c-a5f1-577d26d2747c",
    tenants: ["0015f00000SjNpZAAV"],
  },
  {
    id: "10da3c9d-fe07-49da-b7fa-dd739f655695",
    tenants: ["0015f00000SjNpYAAV"],
  },
  {
    id: "3b0422d6-f0e4-4859-82cc-0b82c1b063da",
    tenants: ["0015f00000SjNpYAAV", "0015f00000SjNpZAAV"],
  },
];
const userAccess = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { userId } = request.query;
  try {
    const selectedUserAccess = userAccessData.find(
      (userAccess) => userAccess.id === userId
    );
    if (!selectedUserAccess) throw new Error("no entry for that ID");
    response.status(200).json(selectedUserAccess);
  } catch {
    response
      .status(500)
      .json({ error: "failed to load user access information" });
  }
};

export default userAccess;
