import React, { useState } from 'react';
import { ImageBtn, ResultBox, ResultDetail, ResultType, customStyles } from './styles';
import { FaAngleRight, FaRegImages } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {
  BlockGameResult,
  CardGameResult,
  CompositionGameResult,
  NumberGameResult,
} from '../../services/myPage/types';
import Modal from 'react-modal';

// Define a union type for GameResult
type GameResultType = CardGameResult | NumberGameResult | BlockGameResult | CompositionGameResult;

interface ResultProps {
  GameResult: GameResultType[];
  slice?: string;
  gameType: string;
}

const isCardGameResult = (game: any): game is CardGameResult =>
  'stage' in game && typeof game.stage === 'string';
const isNumberGameResult = (game: any): game is NumberGameResult =>
  'stage' in game && typeof game.stage === 'number';
const isBlockGameResult = (game: any): game is BlockGameResult => 'createdAt' in game;
const isCompositionGameResult = (game: any): game is CompositionGameResult => 'createdAt' in game;

export const Result = ({ GameResult, slice, gameType }: ResultProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  const openModal = (url: string) => {
    setImageUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setImageUrl('');
  };

  if (slice === 'slice') {
    // Get the last 3 results, reversed to display the most recent first
    const lastThreeResults = GameResult.slice(-3).reverse();
    // If there are less than 3 results, fill the rest with empty objects
    const filledResults = [...lastThreeResults, ...Array(3 - lastThreeResults.length).fill({})];

    return (
      <ResultBox>
        <Link to={'/mypage/gameResultDetail'} state={{ GameResult, gameType }}>
          <ResultType>
            <span>{gameType}</span>
            <FaAngleRight />
          </ResultType>
        </Link>
        {filledResults.map((game, index) => (
          <ResultDetail key={index}>
            {isCardGameResult(game) || isNumberGameResult(game) ? (
              <>
                <div>
                  날짜: <span>{game.date}</span>
                </div>
                <div>
                  기록: <span>{game.stage}</span>
                </div>
              </>
            ) : isBlockGameResult(game) || isCompositionGameResult(game) ? (
              <>
                <div>
                  날짜: <span>{game.createdAt}</span>
                </div>
                <div>
                  <ImageBtn onClick={() => openModal(game.imageUrl)}>
                    <FaRegImages color="gray" size={'1rem'} />
                  </ImageBtn>
                </div>
              </>
            ) : (
              <>
                <div>
                  날짜: <span></span>
                </div>
                <div></div>
              </>
            )}
          </ResultDetail>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={customStyles}
        >
          <img src={imageUrl} alt="Game Result" width={250} />
        </Modal>
      </ResultBox>
    );
  }

  const reversedResults = [...GameResult].reverse();

  return (
    <ResultBox>
      <ResultType>
        <span>{gameType}</span>
      </ResultType>
      {reversedResults.map((game, index) => (
        <ResultDetail key={index}>
          {isCardGameResult(game) || isNumberGameResult(game) ? (
            <>
              <div>
                날짜: <span>{game.date}</span>
              </div>
              <div>
                기록: <span>{game.stage}</span>
              </div>
            </>
          ) : isBlockGameResult(game) || isCompositionGameResult(game) ? (
            <>
              <div>
                날짜: <span>{game.createdAt}</span>
              </div>
              <div>
                <ImageBtn onClick={() => openModal(game.imageUrl)}>
                  <FaRegImages color="gray" size={'1rem'} />
                </ImageBtn>
              </div>
            </>
          ) : (
            <>
              <div>
                날짜: <span></span>
              </div>
              <div></div>
            </>
          )}
        </ResultDetail>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={customStyles}
      >
        <img src={imageUrl} alt="Game Result" width={250} />
      </Modal>
    </ResultBox>
  );
};
