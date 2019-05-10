import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    
  },
  gridList: {
    width: 1600,
    height: 900,
  },
  icon: {
    color: '#4a148c',
  },
});


   
 
  
 
function Moments(props) {
  const { classes } = props;
  const tileData = [
    {
      img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2014/11/Titos-Lane.jpg',
      title: 'Goa',
      author: 'partyNOOB',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Trekking-in-Mcleodganj.jpg',
        title: 'Mcleodganj – Heaven Amidst The Hills',
        author: 'Debian9d',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Kashmir-Valley.jpg',
        title: 'Srinagar – The Gem of Kashmir',
        author: 'Nilwings',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Scuba-Diving.jpg',
        title: 'Andaman – The Beach Haven',
        author: 'SayanM',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Leh-Ladakh.jpg',
        title: 'Leh-Ladakh – The Biker’s Paradise',
        author: 'Debian9d',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Binsar.jpg',
        title: 'Binsar – Explore The Realms Of Wildlife',
        author: 'DeepanjanGG',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Coorg.jpg',
        title: 'Coorg – Walk Amidst The Coffee Plantations',
        author: 'Shila ki jawani',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Kerala-Forests.jpg',
        title: 'Kerala – The Magical God’s Own Country',
        author: 'GGRohit',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/150.jpg',
        title: 'Kanatal – For The Best Camping ',
        author: 'Rittik HATTALI',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/Solo-traveler-in-Kasol.jpg',
        title: 'Kasol – The Trekker’s Paradise',
        author: 'SaumyaBNG',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Rann-of-Kutch.jpg',
        title: 'Kutch – The Most Beautiful Stretch Of White Desert',
        author: 'MadaraUchiha',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/219.jpg',
        title: 'Bir Billing – The Paragliding Hub Of India',
        author: 'MalErMal',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Dibru_Saikhuwa_National_Parkbb2472017.jpg',
        title: 'Assam – Home Of One Horned Rhinos',
        author: 'AnishaCR',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Rafting.jpg',
        title: 'Rishikesh – The Adventure Capital Of India',
        author: 'AnupamBARCA',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/05/Toy-Train-Shimla.jpg',
        title: 'Shimla – The Queen Of Northern Hills',
        author: 'SudaarshanGG',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/317.jpg',
        title: ' Tirthan Valley – The Adventure Hub Of Himachal',
        author: 'KoushikNOTE7PRO',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/08/jim-corbett-tiger-national-park.jpg',
        title: 'Jim Corbett – An Adventurous Jungle Adventure',
        author: 'AritraANC',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/414.jpg',
        title: 'Manali – The Snowy Paradise',
        author: 'DanceQueenAnamika',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/110.jpg',
        title: 'Udaipur – The Romantic City Of Lakes',
        author: 'RikonLibrary',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/01/Skiing-in-Auli.jpg',
        title: 'Auli – A Perfect Place For Ski Lovers',
        author: 'AnkitaGG',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/518.jpg',
        title: 'Mysore – Of Silk, Sandalwood, And Sweets',
        author: 'NabnitaSEMINAR',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2016/02/misty-valley-vof.jpg',
        title: 'Valley of Flowers – Rich In Flora And Fauna',
        author: 'AlishaPHOTOGRAPHER',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/10/Patwon-Ki-Haveli.jpg',
        title: 'Jaisalmer – For The Best Desert Safari Ever',
        author: 'SimranNightingal',
    },
    {
        img: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/01/Untitled-design-4.jpg',
        title: 'Jodhpur – Bleed Blue In The Royal City',
        author: 'RikuPOSER',
    },
  ];
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Incredible INDIA</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Moments.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Moments);
