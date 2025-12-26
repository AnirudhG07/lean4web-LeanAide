import { LeanWebConfig } from './docs' // look here for documentation of the individual config options

const lean4webConfig : LeanWebConfig = {
  "projects": [
    { "folder": "Stable",
      "name": "Stable Lean" },
    {
      "folder": "LeanAide",
      "name": "LeanAide",
      "examples": [
        { "file": "ClientTest/ClientTest/Basic.lean", "name": "Basic" },
        { "file": "ClientTest/ClientTest/CodeGeneration.lean", "name": "Code Generation" },
        { "file": "ClientTest/ClientTest/DSL.lean", "name": "DSL" },
        { "file": "ClientTest/ClientTest/IsomAbelian.lean", "name": "IsomAbelian" },
        { "file": "ClientTest/ClientTest/SmallCodes.lean", "name": "Small Codes" }
      ]
    },
  ],
  "serverCountry": null,
  "contactDetails": null,
  "impressum": null
}

export default lean4webConfig
