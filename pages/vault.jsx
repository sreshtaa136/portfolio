import React from "react";
import vaultImg from "../public/projects/vault.png";
import ProjectPage from "../components/ProjectPage";

const vault = () => {
  return (
    <ProjectPage
      title="The Vault"
      subTitle="Python project"
      coverImg={vaultImg}
      description="The Vault is a command-line application designed for securely
      encrypting and managing user passwords within an encrypted file
      utilizing Python's cryptography module. This robust utility empowers
      users to create new password entries, modify existing ones, delete
      entries, and easily access their stored passwords.<br /><br />
      It is essential to note that while the Vault offers a convenient
      means of safeguarding passwords, it is not recommended for
      high-security or mission-critical applications. Instead, it serves
      as an ideal solution for storing passwords or password hints for
      resources that do not demand an extensive level of security.<br /><br />
      With the Vault, your passwords remain protected and inaccessible to
      prying eyes, unless, of course, the person sneaking through this
      code knows Python :p"
      gitUrl="https://github.com/sreshtaa136/TheVault"
      technologies={["Python"]}
    />
  );
};

export default vault;
