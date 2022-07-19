import styles from './index.module.css';

//props: {src:string,alt:string,hasBorder:boolean}

export function Avatar({ hasBorder = true, src, alt}){

  return (
    <img className={ hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} />
  );
}