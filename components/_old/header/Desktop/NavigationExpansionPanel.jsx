import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';

const NavigationExpansionPanel = ({ item, expanded = false, handleClick }) => {
  const { locale } = useRouter();
  const expandChildren = item && item.children && item.children.length > 0;

  return (
    <div
      className={classnames({
        'absolute bg-white border-t w-full p-5 z-200': true,
        'transition-transform duration-300 delay-200 ease-out origin-top': true,
        'transform scale-y-100': expanded,
        'transform scale-y-0': !expanded,
      })}
      style={{ animation: `fadeIn 1s` }}
    >
      <ul className="flex bg-background-primary min-h-400px w-9/12 m-auto">
        {expandChildren &&
          item.children.map((child) => {
            return (
              <div className="w-1/4" key={child.pageFolderId}>
                <Link
                  href={item._urls[locale]}
                  style={{ animation: `fadeIn 1s` }}
                  onClick={(e) => {
                    return handleClick(e, child);
                  }}
                >
                  <a>
                    <div
                      className="pb-4 font-bold text-sm text-neutral-900 hover:text-indigo-700"
                      style={{ animation: `fadeIn 2s` }}
                    >
                      {child.name}
                      {child.configuration.displayMedia && (
                        <Image
                          className="pt-4 max-h-316px max-w-192px"
                          style={{ animation: `fadeIn 2s` }}
                          forceWidth={176}
                          media={child.configuration.displayMedia.media}
                          alt={child.configuration.displayMedia.media.title}
                        />
                      )}
                    </div>
                  </a>
                </Link>
                {child.children.map((grandchild) => {
                  return (
                    <Link
                      href={grandchild._urls[locale]}
                      key={grandchild.pageFolderId}
                      className="pt-1 block text-neutral-900 font-normal text-sm hover:text-indigo-700 mb-4"
                      style={{ animation: `fadeIn 2s` }}
                      onClick={(e) => {
                        return handleClick(e, grandchild);
                      }}
                    >
                      <a>{grandchild.name}</a>
                    </Link>
                  );
                })}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default NavigationExpansionPanel;
