<?php

namespace App\EventListener;


use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;

class JWT
{

    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }
        //INFOS QUE JE RECUPERE DANS MA REQUETE DE LOGIN_CHECK
        $data['data'] = array(
            'roles' => $user->getRoles(),
            'Id' => $user->getId(),
            'planetId' => $user->getPlanetSelected() ? $user->getPlanetSelected()->getId() : null,
        );

        $event->setData($data);
    }
}

