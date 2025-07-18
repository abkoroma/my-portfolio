/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
import './projectlist.css';

export default function ProjectList(props: {
    imageUrl: string, title: string, description: string, stack: string[], link: string, view: string}) {

    return (
        <div className='grid-container'>
            <div className="img-card">
                <img className="proj-img" src={props.imageUrl} alt={props.title} />
            </div>
            <div className='props'>
                <h3 className="proj-title">{props.title}</h3>
                <p className="description">{props.description}</p>
                <div className='stacks'>
                    {
                        props.stack.map((stacks) => 
                            <span className="stack" key={stacks}>{stacks}</span>
                        )
                    }
                </div>
                <div className="links-container">
                    <span className="git-link">
                        <Link className="link" to={props.link} target="_blank" rel="noreferrer">Github</Link>
                    </span>
                    <span className="git-link">
                        <Link className="link" to={props.view} target="_blank" rel="noreferrer">View</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}