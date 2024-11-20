import styled from "styled-components";

export const Container = styled.section`
  margin: 3rem auto;
  padding: 2rem;
  width: 90%;
  max-width: 650px;
  background: linear-gradient(145deg, #f7f7f7, #ffffff);
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: #333;
      position: relative;
      animation: slideIn 0.8s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 3px;
        background: #ff4757;
        border-radius: 5px;
      }
    }

    p {
      font-size: 1.2rem;
      color: #666;
      margin-top: 1rem;
    }
  }

  .contacts {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    gap: 1rem;

    .contact-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #ff6b81, #ff4757);
      padding: 1rem;
      border-radius: 20px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      transition: all 0.3s ease;
      overflow: hidden;
      position: relative;
      z-index: 1;

      .contact-link {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        position: relative;
      }

      .contact-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-weight: bold;
        transition: transform 0.3s ease;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      }

      .contact-icon {
        width: 35px;
        height: 35px;
        transition: transform 0.3s ease;
      }

      .contact-text {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover .contact-icon {
        transform: scale(1.2);
      }

      &:hover .contact-text {
        transform: scale(1.1);
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .form-group {
      display: flex;
      flex-direction: column;

      label {
        font-size: 1rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      input,
      textarea {
        padding: 0.8rem;
        font-size: 1rem;
        border: 1px solid #ddd;
        border-radius: 8px;
        transition: box-shadow 0.3s ease, border-color 0.3s ease;

        &:focus {
          border-color: #ff4757;
          box-shadow: 0 0 10px rgba(255, 71, 87, 0.5);
          outline: none;
        }
      }

      textarea {
        min-height: 100px;
      }
    }

    button {
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      color: #fff;
      background: #ff4757;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: #ff6b81;
      }
    }

    .form-status {
      text-align: center;
      margin-top: 1rem;
      font-size: 1rem;
      color: #28a745;
    }
  }

  .pop-up-message {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 15px 30px;
    font-size: 1.1rem;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    animation: slideInPopUp 0.5s forwards;
    z-index: 9999;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slideInPopUp {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

