import React from "react"
import "./card.css"
import Icon from "@mdi/react"
import { mdiOpenInNew } from "@mdi/js"

export default function Card({ projectName, projectDescription, img }) {
  return (
    <div className="card">
      <img src={img} alt="project screenshot" className="card__image" />
      <div className="card__text-container">
        <div className="card__text-container-header">
          <span className="card__project-name">{projectName}</span>
          <div className="card__icon-container">
            <i class="devicon-github-original colored"></i>
            <Icon
              path={mdiOpenInNew}
              title="Open Link"
              size={0.73}
              color="black"
            />
          </div>
        </div>
        <span className="card__project-description">{projectDescription}</span>
      </div>
    </div>
  )
}
