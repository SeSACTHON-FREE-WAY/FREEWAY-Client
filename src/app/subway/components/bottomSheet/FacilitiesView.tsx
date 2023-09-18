import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { FacilitiesProps } from '@/types/stationType';
import { nowDateFormat } from '@/utils/format';

interface DateProps {
  year?: number;
  month: string | number;
  date: string | number;
  hours: string | number;
  minutes: string | number;
  dayOfWeek: string;
}

const FacilitiesView = ({ facilities }: { facilities: FacilitiesProps }) => {
  const facilitiesData = [
    {
      title: '장애인 화장실',
      name: 'disabledToilet',
      icon: (
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M8.1377 6.52246C7.8916 6.52246 7.68066 6.43457 7.50488 6.25879C7.3291 6.08301 7.24121 5.86914 7.24121 5.61719C7.24121 5.37695 7.3291 5.16895 7.50488 4.99316C7.68066 4.81738 7.8916 4.72949 8.1377 4.72949H19.7041C19.9502 4.72949 20.1611 4.81738 20.3369 4.99316C20.5127 5.16895 20.6006 5.37695 20.6006 5.61719C20.6006 5.86914 20.5127 6.08301 20.3369 6.25879C20.1611 6.43457 19.9502 6.52246 19.7041 6.52246H8.1377ZM13.9209 17.2012C13.0186 17.2012 12.1836 17.1426 11.416 17.0254C10.6543 16.9023 9.98926 16.7324 9.4209 16.5156C8.85254 16.293 8.41016 16.0352 8.09375 15.7422C7.77734 15.4434 7.61914 15.1182 7.61914 14.7666C7.61914 14.4209 7.77734 14.1016 8.09375 13.8086C8.41016 13.5098 8.85254 13.252 9.4209 13.0352C9.98926 12.8184 10.6543 12.6514 11.416 12.5342C12.1836 12.4111 13.0186 12.3496 13.9209 12.3496C14.8232 12.3496 15.6582 12.4111 16.4258 12.5342C17.1934 12.6514 17.8613 12.8184 18.4297 13.0352C18.998 13.252 19.4375 13.5098 19.748 13.8086C20.0645 14.1016 20.2227 14.4209 20.2227 14.7666C20.2227 15.1182 20.0645 15.4434 19.748 15.7422C19.4375 16.0352 18.998 16.293 18.4297 16.5156C17.8672 16.7324 17.2021 16.9023 16.4346 17.0254C15.667 17.1426 14.8291 17.2012 13.9209 17.2012ZM13.6748 21.3408C12.667 21.3408 11.7559 21.1592 10.9414 20.7959C10.1328 20.4326 9.45898 19.9111 8.91992 19.2314C8.38086 18.5518 8.01465 17.7285 7.82129 16.7617C8.43652 17.2129 9.27148 17.5615 10.3262 17.8076C11.3867 18.0537 12.585 18.1768 13.9209 18.1768C15.2627 18.1768 16.4609 18.0537 17.5156 17.8076C18.5703 17.5615 19.4082 17.2129 20.0293 16.7617C19.8359 17.7227 19.4668 18.5459 18.9219 19.2314C18.3828 19.9111 17.709 20.4326 16.9004 20.7959C16.0918 21.1592 15.1807 21.3408 14.167 21.3408H13.6748ZM13.9209 26.6055C13.3994 26.6055 12.8516 26.5586 12.2773 26.4648C11.7031 26.377 11.1641 26.2363 10.6602 26.043C10.1621 25.8496 9.76367 25.6035 9.46484 25.3047C9.3418 25.1699 9.26855 25.0176 9.24512 24.8477C9.22168 24.6777 9.23633 24.499 9.28906 24.3115L10.124 21.5605C10.6514 21.8242 11.2109 22.0234 11.8027 22.1582C12.3945 22.293 13.0068 22.3604 13.6396 22.3604H14.1758C14.8145 22.3604 15.4326 22.29 16.0303 22.1494C16.6279 22.0146 17.1904 21.8154 17.7178 21.5518L18.5527 24.3115C18.6055 24.499 18.6201 24.6777 18.5967 24.8477C18.5732 25.0176 18.5 25.1699 18.377 25.3047C18.0781 25.6035 17.6768 25.8496 17.1729 26.043C16.6748 26.2363 16.1387 26.377 15.5645 26.4648C14.9902 26.5586 14.4424 26.6055 13.9209 26.6055ZM19.2471 12.2793C18.5967 11.9805 17.8174 11.749 16.9092 11.585C16.001 11.415 15.0049 11.3301 13.9209 11.3301C12.8428 11.3301 11.8467 11.415 10.9326 11.585C10.0244 11.749 9.24805 11.9805 8.60352 12.2793L8.26953 7.54199H19.5635L19.2471 12.2793Z'
            fill='#434343'
          />
        </svg>
      ),
    },
    {
      title: '휠체어 리프트',
      name: 'wheelchairLift',
      icon: (
        <svg
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M9.28709 27.4375C7.63736 27.4375 6.21875 26.8438 5.03125 25.6562C3.84375 24.4688 3.25 23.0521 3.25 21.4062C3.25 19.7604 3.84375 18.3438 5.03125 17.1562C6.21875 15.9688 7.63542 15.375 9.28125 15.375V17.25C8.15625 17.25 7.18229 17.6615 6.35938 18.4844C5.53646 19.3073 5.125 20.2812 5.125 21.4062C5.125 22.5312 5.53646 23.5052 6.35938 24.3281C7.18229 25.151 8.15625 25.5625 9.28125 25.5625C10.4062 25.5625 11.3698 25.1719 12.1719 24.3906C12.974 23.6094 13.375 22.5 13.375 21.0625H15.25C15.25 23 14.6686 24.5469 13.5058 25.7031C12.3431 26.8594 10.9368 27.4375 9.28709 27.4375ZM19.7188 26.5V20.125H12.9375C11.9167 20.125 11.151 19.7292 10.6406 18.9375C10.1302 18.1458 10.0833 17.3021 10.5 16.4062L13.1875 10.5H10.25L9.40625 12.7812L7.53125 12.1562L8.40625 9.8125C8.51042 9.4375 8.70312 9.14583 8.98438 8.9375C9.26562 8.72917 9.63685 8.625 10.0981 8.625H16.0938C16.9271 8.625 17.5781 8.95833 18.0469 9.625C18.5156 10.2917 18.5833 10.9792 18.25 11.6875L15.4375 17.6562H19.25C19.8945 17.6562 20.4463 17.8872 20.9053 18.349C21.3643 18.8109 21.5938 19.3661 21.5938 20.0146V26.5H19.7188ZM19.2525 7.625C18.6258 7.625 18.0885 7.40188 17.6406 6.95563C17.1927 6.50935 16.9688 5.9729 16.9688 5.34625C16.9688 4.71958 17.1919 4.18229 17.6381 3.73438C18.0844 3.28646 18.6209 3.0625 19.2475 3.0625C19.8742 3.0625 20.4115 3.28562 20.8594 3.73187C21.3073 4.17815 21.5312 4.7146 21.5312 5.34125C21.5312 5.96792 21.3081 6.50521 20.8619 6.95312C20.4156 7.40104 19.8791 7.625 19.2525 7.625Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: '유아수유방',
      name: 'feedingRoom',
      icon: (
        <svg
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.9126 25.6666C12.0959 25.6666 11.3036 25.5791 10.5355 25.4041C9.76744 25.2291 9.0723 25.0055 8.45008 24.7333C7.55564 24.3444 6.82647 23.8728 6.26258 23.3187C5.69869 22.7645 5.41675 22.1471 5.41675 21.4666V14.7291C5.41675 14.1263 5.64522 13.5721 6.10216 13.0666C6.55911 12.561 7.1473 12.1138 7.86675 11.7249C8.60564 11.336 9.41744 11.0346 10.3022 10.8208C11.1869 10.6069 12.0862 10.4999 13.0001 10.4999C13.914 10.4999 14.8133 10.6069 15.698 10.8208C16.5827 11.0346 17.3945 11.336 18.1334 11.7249C18.8723 12.1138 19.4654 12.561 19.9126 13.0666C20.3598 13.5721 20.5834 14.1263 20.5834 14.7291V21.4666C20.5834 21.7971 20.5105 22.118 20.3647 22.4291C20.2188 22.7402 20.0098 23.0319 19.7376 23.3041C19.4654 23.5763 19.1494 23.8339 18.7897 24.077C18.4299 24.3201 18.0265 24.5388 17.5792 24.7333C17.5987 24.636 17.6279 24.3638 17.6667 23.9166C17.6667 22.7888 17.2681 21.8263 16.4709 21.0291C15.6737 20.2319 14.7112 19.8333 13.5834 19.8333C12.7473 19.8333 12.0084 20.0569 11.3667 20.5041C10.7251 20.9513 10.239 21.5249 9.90841 22.2249C10.5306 22.3805 11.0994 22.4874 11.6147 22.5458C12.1299 22.6041 12.582 22.6333 12.9709 22.6333C13.3015 22.6333 13.5688 22.6235 13.773 22.6041C13.9772 22.5846 14.1084 22.5749 14.1667 22.5749V25.6083C13.9529 25.6277 13.7438 25.6423 13.5397 25.652C13.3355 25.6617 13.1265 25.6666 12.9126 25.6666ZM16.5001 19.2499C17.1417 19.2499 17.6911 19.0214 18.148 18.5645C18.6049 18.1076 18.8334 17.5583 18.8334 16.9166C18.8334 16.2749 18.6049 15.7256 18.148 15.2687C17.6911 14.8117 17.1417 14.5833 16.5001 14.5833C15.8584 14.5833 15.3091 14.8117 14.8522 15.2687C14.3952 15.7256 14.1667 16.2749 14.1667 16.9166C14.1667 17.5583 14.3952 18.1076 14.8522 18.5645C15.3091 19.0214 15.8584 19.2499 16.5001 19.2499ZM13.0001 9.33325C13.9723 9.33325 14.7987 8.99784 15.4792 8.327C16.1598 7.65617 16.5001 6.82492 16.5001 5.83325C16.5001 4.86103 16.1598 4.03464 15.4792 3.35409C14.7987 2.67353 13.9723 2.33325 13.0001 2.33325C12.0084 2.33325 11.1772 2.67353 10.5063 3.35409C9.8355 4.03464 9.50008 4.86103 9.50008 5.83325C9.50008 6.82492 9.8355 7.65617 10.5063 8.327C11.1772 8.99784 12.0084 9.33325 13.0001 9.33325Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: '환전키오스크',
      name: 'currencyExchangeKiosk',
      icon: (
        <svg
          width='26'
          height='26'
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M13.6252 16.6247C12.7224 16.6247 11.955 16.3087 11.3231 15.6768C10.6911 15.0448 10.3752 14.2775 10.3752 13.3747C10.3752 12.4719 10.6911 11.7045 11.3231 11.0726C11.955 10.4406 12.7224 10.1247 13.6252 10.1247C14.5279 10.1247 15.2953 10.4406 15.9272 11.0726C16.5592 11.7045 16.8752 12.4719 16.8752 13.3747C16.8752 14.2775 16.5592 15.0448 15.9272 15.6768C15.2953 16.3087 14.5279 16.6247 13.6252 16.6247ZM4.9585 20.4163C4.51162 20.4163 4.12907 20.2572 3.81084 19.939C3.49261 19.6208 3.3335 19.2382 3.3335 18.7913V7.95801C3.3335 7.51113 3.49261 7.12858 3.81084 6.81035C4.12907 6.49212 4.51162 6.33301 4.9585 6.33301H22.2918C22.7387 6.33301 23.1213 6.49212 23.4395 6.81035C23.7577 7.12858 23.9168 7.51113 23.9168 7.95801V18.7913C23.9168 19.2382 23.7577 19.6208 23.4395 19.939C23.1213 20.2572 22.7387 20.4163 22.2918 20.4163H4.9585ZM7.66683 18.7913H19.5835C19.5835 18.033 19.8453 17.392 20.3689 16.8684C20.8925 16.3448 21.5335 16.083 22.2918 16.083V10.6663C21.5335 10.6663 20.8925 10.4045 20.3689 9.88092C19.8453 9.35731 19.5835 8.71634 19.5835 7.95801H7.66683C7.66683 8.71634 7.40502 9.35731 6.88141 9.88092C6.3578 10.4045 5.71683 10.6663 4.9585 10.6663V16.083C5.71683 16.083 6.3578 16.3448 6.88141 16.8684C7.40502 17.392 7.66683 18.033 7.66683 18.7913Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: '무인민원발급기',
      name: 'unmannedCivilApplicationIssuingMachine',
      icon: (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.3252 17H13.8252V11H12.3252V17ZM12.9998 9.15C13.2334 9.15 13.4294 9.07333 13.5877 8.92C13.7461 8.76667 13.8252 8.57667 13.8252 8.35C13.8252 8.10917 13.7462 7.90729 13.5882 7.74438C13.4301 7.58146 13.2343 7.5 13.0007 7.5C12.7671 7.5 12.5711 7.58146 12.4127 7.74438C12.2544 7.90729 12.1752 8.10917 12.1752 8.35C12.1752 8.57667 12.2543 8.76667 12.4123 8.92C12.5703 9.07333 12.7662 9.15 12.9998 9.15ZM13.0069 22C11.628 22 10.3322 21.7375 9.11939 21.2125C7.90663 20.6875 6.84608 19.9708 5.93774 19.0625C5.02941 18.1542 4.31274 17.093 3.78774 15.879C3.26274 14.665 3.00024 13.3678 3.00024 11.9875C3.00024 10.6072 3.26274 9.31003 3.78774 8.09602C4.31274 6.88201 5.02941 5.825 5.93774 4.925C6.84608 4.025 7.90725 3.3125 9.12127 2.7875C10.3353 2.2625 11.6324 2 13.0127 2C14.3931 2 15.6902 2.2625 16.9042 2.7875C18.1182 3.3125 19.1752 4.025 20.0752 4.925C20.9752 5.825 21.6877 6.88333 22.2127 8.1C22.7377 9.31667 23.0002 10.6145 23.0002 11.9934C23.0002 13.3723 22.7377 14.6681 22.2127 15.8809C21.6877 17.0936 20.9752 18.1526 20.0752 19.0579C19.1752 19.9632 18.1169 20.6798 16.9002 21.2079C15.6836 21.736 14.3858 22 13.0069 22ZM13.0127 20.5C15.3711 20.5 17.3752 19.6708 19.0252 18.0125C20.6752 16.3542 21.5002 14.3458 21.5002 11.9875C21.5002 9.62917 20.6768 7.625 19.0299 5.975C17.3831 4.325 15.3732 3.5 13.0002 3.5C10.6502 3.5 8.64608 4.32343 6.98774 5.9703C5.32941 7.61718 4.50024 9.62708 4.50024 12C4.50024 14.35 5.32941 16.3542 6.98774 18.0125C8.64608 19.6708 10.6544 20.5 13.0127 20.5Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
    {
      title: '환승주차장',
      name: 'transitParkingLot',
      icon: (
        <svg
          width='26'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M5.125 25.3847V4.61548H13.4327C15.3173 4.61548 16.9038 5.25971 18.1923 6.54817C19.4808 7.83663 20.125 9.42317 20.125 11.3078C20.125 13.1924 19.4808 14.7789 18.1923 16.0674C16.9038 17.3559 15.3173 18.0001 13.4327 18.0001H8.58654V25.3847H5.125ZM8.58654 14.5386H13.4327C14.3558 14.5386 15.125 14.2309 15.7404 13.6155C16.3558 13.0001 16.6635 12.2309 16.6635 11.3078C16.6635 10.3847 16.3558 9.61548 15.7404 9.00009C15.125 8.38471 14.3558 8.07702 13.4327 8.07702H8.58654V14.5386Z'
            fill='currentColor'
          />
        </svg>
      ),
    },
  ];

  const [nowDate, setNowDate] = useState<DateProps>({
    month: 0,
    date: 0,
    hours: '0',
    minutes: '0',
    dayOfWeek: '0',
  });

  useEffect(() => {
    const date = nowDateFormat();
    setNowDate(date);
  }, []);

  return (
    <StyledFacilitiesView>
      <div className='updateDate'>{`${nowDate.month}/${nowDate.date} ${nowDate.dayOfWeek}요일 ${nowDate.hours}:${nowDate.minutes} 업데이트 완료`}</div>
      <StyledFacilitiesBox>
        {facilitiesData.map((item) => (
          <StyledFacilitiesItem
            key={item.name}
            $isActive={facilities ? facilities[item.name] : false}
          >
            <span className='icon'>{item.icon}</span>
            <div className='title'>{item.title}</div>
            <span className='status'>
              {facilities ? (facilities[item.name] ? '사용가능' : '사용불가') : '사용불가'}
            </span>
          </StyledFacilitiesItem>
        ))}
      </StyledFacilitiesBox>
    </StyledFacilitiesView>
  );
};

export default FacilitiesView;

const StyledFacilitiesView = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 75px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 50;

  & > .updateDate {
    height: 36px;
    padding: 11px 0;
    color: #cbd0d9;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
`;

const StyledFacilitiesBox = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledFacilitiesItem = styled.li<{ $isActive: boolean }>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 15px 20px;
  font-weight: 600;
  color: ${({ $isActive }) => ($isActive ? '#434343' : 'rgba(67, 67, 67, 0.5)')};
  border-bottom: 1px solid #d9d9d9;

  &:first-child {
    padding-top: 8px;
  }

  & > .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  & > .title {
    padding-top: 3px;
  }

  & > .status {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 5px 8px 4px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 30px;

    ${({ $isActive }) => {
      return $isActive
        ? css`
            color: #4aa570;
            background: rgba(96, 208, 132, 0.3);
          `
        : css`
            color: #e56e73;
            background: rgba(229, 110, 115, 0.2);
          `;
    }}
  }
`;